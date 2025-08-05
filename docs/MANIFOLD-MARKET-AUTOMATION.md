# Manifold Market Automation Setup

This document explains how the automated Manifold market resolution works for issue #59 and the BOSS.dev bounty.

## Overview

The system automatically resolves the Manifold prediction market based on two conditions:
1. A PR is merged that closes issue #59
2. The BOSS.dev $1,500 bounty is released (indicated by the `bounty-released` label)

If both conditions are met by August 6, 2025 9PM ET, the market resolves to **YES**.
If the deadline passes without both conditions being met, the market resolves to **NO**.

## Setup Instructions

### 1. Add the Manifold API Key

1. Go to your repository settings
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `MANIFOLD_API_KEY`
5. Value: Your Manifold API key (provided)
6. Click **Add secret**

### 2. Create the bounty-released Label

1. Go to the repository's Issues page
2. Click on **Labels**
3. Click **New label**
4. Label name: `bounty-released`
5. Description: "BOSS.dev bounty has been released"
6. Color: Choose a distinctive color (e.g., green #0E8A16)
7. Click **Create label**

## How It Works

### Event-Driven Resolution (manifold-resolve.yml)

This workflow triggers on:
- PR merges (checks if the PR closes issue #59)
- Label additions to issue #59 (specifically the `bounty-released` label)

When both conditions are met:
1. The workflow verifies issue #59 is closed
2. The workflow verifies the `bounty-released` label is present
3. If the market hasn't been resolved yet, it resolves to **YES**
4. A comment is posted on issue #59 confirming the resolution

### Deadline-Based Resolution (manifold-deadline.yml)

This workflow runs hourly and:
1. Checks if the current time is past the deadline (Aug 6, 2025 9PM ET)
2. If past deadline and market is unresolved, checks if conditions were met
3. If conditions weren't met, resolves the market to **NO**

## Usage

### When Jonathan submits the PR:

1. Ensure the PR description or commit message includes one of:
   - "Closes #59"
   - "Fixes #59"
   - "Resolves #59"
   
   This creates the GitHub link between the PR and issue.

2. Review and merge the PR when ready

### When BOSS.dev releases the bounty:

1. Go to issue #59
2. Add the `bounty-released` label
3. The automation will detect both conditions are met and resolve the market to YES

### Manual Testing

You can manually trigger the deadline workflow to test:
1. Go to **Actions** tab
2. Select "Check Manifold Market Deadline"
3. Click "Run workflow"

## Important Notes

- The market ID is hardcoded: `nQIuhZd9O8`
- The deadline is: August 6, 2025 9PM ET (timestamp: 1754528400000)
- Both workflows check if the market is already resolved to avoid duplicate resolutions
- The system posts comments on issue #59 when resolving the market

## Troubleshooting

If the automation doesn't work:
1. Check the Actions tab for workflow run logs
2. Verify the `MANIFOLD_API_KEY` secret is set correctly
3. Ensure the `bounty-released` label exists
4. Check that the PR properly references issue #59

## Security Note

The Manifold API key is stored securely as a GitHub secret and is only accessible to the workflows. Never commit the API key directly to the repository.