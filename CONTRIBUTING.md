# Contributing to Get Stuff Done AI

Thank you for your interest in contributing! This project is open source to enable permissionless, ad-hoc contributions without formal relationships.

## 🎯 How to Contribute

### Quick Contributions
- **Issues**: Report bugs or suggest features via [GitHub Issues](https://github.com/culstrup/get-stuff-done-ai/issues)
- **Pull Requests**: Submit improvements directly - no formal agreement needed!
- **Bounties**: Watch for bounty-labeled issues for paid contribution opportunities

### Getting Started

1. **Fork the repository**
   ```bash
   git clone https://github.com/culstrup/get-stuff-done-ai.git
   cd get-stuff-done-ai
   npm install
   ```

2. **Enable git hooks** (prevents committing sensitive data)
   ```bash
   git config core.hooksPath .githooks
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

## 📋 Development Guidelines

### Code Style
- Follow existing patterns in the codebase
- Use TypeScript for new components
- Follow the conventions in `CLAUDE.md`
- Components use PascalCase, files use kebab-case

### Before Submitting

1. **Test your changes**
   ```bash
   npm run build
   npm run lint
   ```

2. **Update relevant documentation**
   - Update README if adding new features
   - Document any new environment variables
   - Add comments for complex logic

3. **Submit a focused PR**
   - One feature/fix per PR
   - Clear description of what and why
   - Reference any related issues

## 🚫 Security Guidelines

**NEVER commit:**
- LinkedIn export data (CSVs, ZIPs)
- API keys or secrets
- Personal information
- Large data files

See `LINKEDIN-GUIDE.md` for handling LinkedIn data safely.

## 💡 What to Work On

### High Priority
- Performance optimizations
- Accessibility improvements
- Mobile responsiveness fixes
- SEO enhancements

### Feature Ideas
- New AI service integrations
- Interactive demos
- Case study templates
- Analytics dashboards

### Always Welcome
- Bug fixes
- Documentation improvements
- Test coverage
- UI/UX enhancements

## 🤝 Communication

- **Questions**: Open an issue with the "question" label
- **Discussions**: Use GitHub Discussions for broader topics
- **Direct Contact**: Reach out via LinkedIn for partnership opportunities

## 📄 License

By contributing, you agree that your contributions will be licensed under the Apache License 2.0. See [LICENSE](LICENSE) for details.

### Important Notes

- **Copyright**: All contributions become part of the project owned by GSD at Work LLC
- **Attribution**: Required for any public use or distribution
- **Trademarks**: "Get Stuff Done AI" and "GSD at Work" are trademarks of GSD at Work LLC
- **Patent Grant**: By contributing, you grant patent rights as specified in Apache 2.0