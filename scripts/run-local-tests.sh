#!/bin/bash

# Simple script to run Playwright tests locally with different options

# Set colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Get Stuff Done AI Test Runner ===${NC}\n"

# Check if Playwright is installed
if ! command -v npx playwright &> /dev/null; then
    echo -e "${RED}Error: Playwright not found${NC}"
    echo -e "Please install Playwright first with: ${YELLOW}npm install${NC}"
    exit 1
fi

function run_tests() {
    echo -e "${BLUE}Running tests...${NC}\n"
    
    if [ "$1" == "ui" ]; then
        npx playwright test --ui
    elif [ "$1" == "headed" ]; then
        npx playwright test --headed --project=chromium
    elif [ "$1" == "seo" ]; then
        npx playwright test seo.spec.ts --project=chromium
    else
        npx playwright test --project=chromium
    fi
    
    TEST_EXIT_CODE=$?
    
    if [ $TEST_EXIT_CODE -eq 0 ]; then
        echo -e "\n${GREEN}All tests passed!${NC}"
    else
        echo -e "\n${RED}Some tests failed. See report for details.${NC}"
        echo -e "Run ${YELLOW}npx playwright show-report${NC} to view the test report."
    fi
    
    exit $TEST_EXIT_CODE
}

# Handle command line arguments
if [ $# -eq 0 ]; then
    # No arguments, show menu
    echo "Select test mode:"
    echo "1) Run all tests (headless)"
    echo "2) Run tests with UI"
    echo "3) Run tests in headed browser"
    echo "4) Run SEO tests only"
    echo "q) Quit"
    
    read -p "Enter your choice: " choice
    
    case $choice in
        1) run_tests ;;
        2) run_tests ui ;;
        3) run_tests headed ;;
        4) run_tests seo ;;
        q|Q) echo "Exiting."; exit 0 ;;
        *) echo -e "${RED}Invalid choice${NC}"; exit 1 ;;
    esac
else
    # Use argument directly
    case $1 in
        ui|--ui) run_tests ui ;;
        headed|--headed) run_tests headed ;;
        seo|--seo) run_tests seo ;;
        help|--help|-h) 
            echo "Usage: $0 [OPTION]"
            echo "Run tests for Get Stuff Done AI"
            echo ""
            echo "Options:"
            echo "  ui, --ui             Run tests with UI"
            echo "  headed, --headed     Run tests in headed browser"
            echo "  seo, --seo           Run SEO tests only"
            echo "  help, --help, -h     Show this help"
            exit 0
            ;;
        *) run_tests ;;
    esac
fi