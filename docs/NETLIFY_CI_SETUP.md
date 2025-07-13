# Netlify CI Integration Setup

## Prerequisites

To enable automated testing against Netlify preview deployments, you need to:

### 1. Get Your Netlify Site Name

1. Go to your Netlify dashboard
2. Click on your site
3. Go to "Site configuration" → "General" → "Project details"
4. Find "Project name" (e.g., `deft-florentine-69dcb4`)

### 2. Create a Netlify Personal Access Token

1. Go to https://app.netlify.com/user/applications/personal
2. Click "New access token"
3. Give it a descriptive name like "GitHub Actions CI"
4. Copy the token (you won't see it again!)

### 3. Add the Token to GitHub Secrets

1. Go to your GitHub repository
2. Click "Settings" → "Secrets and variables" → "Actions"
3. Click "New repository secret"
4. Name: `NETLIFY_TOKEN`
5. Value: Paste your Netlify token
6. Click "Add secret"

### 4. Update CI Workflow (Already Done)

The `.github/workflows/ci.yml` file has been updated to:
- Wait for Netlify preview deployments
- Run tests against the preview URL
- Upload test reports as artifacts

## How It Works

1. **Developer creates PR** → GitHub Actions starts
2. **Netlify creates preview** → Unique URL for the PR
3. **CI waits for preview** → Using the Netlify API
4. **Tests run against preview** → Real testing of new code
5. **Results posted to PR** → Pass/fail status

## Troubleshooting

### Tests Still Running Against Production

Check that:
- `NETLIFY_TOKEN` is set in GitHub secrets
- Site name in CI workflow matches your Netlify site
- Preview deployments are enabled in Netlify

### Preview URL Not Found

Ensure:
- Netlify GitHub integration is connected
- Preview deploys are enabled (Site configuration → Build & deploy → Deploy contexts)
- The PR has triggered a Netlify build

### Tests Timeout Waiting for Preview

This might happen if:
- Netlify build is slow (check Netlify dashboard)
- Token permissions are incorrect
- Site name is wrong in the workflow

## Alternative Approach

If Netlify integration isn't working, you can use a simpler approach:

```yaml
# In .github/workflows/ci.yml
- name: Start preview server
  run: npm run preview &
  
- name: Wait for server
  run: npx wait-on http://localhost:4173
  
- name: Run tests
  run: npm test
  env:
    BASE_URL: http://localhost:4173
```

This builds and serves the production build locally in CI.