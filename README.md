# thekevinsingh.com

Personal portfolio and blog site built with Angular 15, deployed to AWS via S3 + CloudFront.

## Project Structure

```
thekevinsinghDOTcom/
  frontend/               # Angular 15 + Bootstrap 5 + Ionic
    src/
      app/
        landing/           # Main pages (home, aboutme, hireme, projects, topics)
        shared/            # Header, footer components
        global_services/   # JSON manager, loading spinner, toast services
        guard/             # Auth guard
        interceptors/      # Spinner interceptor
      assets/              # Images, fonts, JSON data, CSS
      environments/        # Environment configs (dev/prod)
  infrastructure/          # Terraform IaC
    terraform/aws/         # S3, CloudFront, Route53 (optional)
  .github/workflows/       # CI/CD: build + deploy on push to develop/main
```

## Local Development

```bash
cd frontend
npm install
ng serve              # http://localhost:4200
```

## Production Build

```bash
cd frontend
ng build --configuration production
# Output: frontend/dist/thekevinsinghweb/
```

## Deployment

Deployment is automated via GitHub Actions on push to `develop` or `main`:

1. Builds Angular production bundle
2. Syncs to S3 (`thekevinsingh-dev-frontend-396326422827`)
3. Invalidates CloudFront cache (`E1GYZMRQ42S0N7`)

**Live URL**: https://d31q41f95i2by7.cloudfront.net

### Manual Deploy

```bash
cd frontend
ng build --configuration production
aws s3 sync dist/thekevinsinghweb/ s3://thekevinsingh-dev-frontend-396326422827 --delete
aws cloudfront create-invalidation --distribution-id E1GYZMRQ42S0N7 --paths "/*"
```

## Infrastructure

Managed with Terraform in `infrastructure/terraform/aws/`:

| Resource | Purpose |
|----------|---------|
| S3 Bucket | Frontend static hosting (versioned, encrypted, private) |
| CloudFront | CDN with HTTPS, HTTP/2+3, gzip, SPA routing |
| Route53 | DNS (optional, for custom domain) |

```bash
cd infrastructure/terraform/aws
terraform init
terraform plan
terraform apply
```

## GitHub Secrets

| Secret | Purpose |
|--------|---------|
| `AWS_ACCESS_KEY_ID` | IAM user for deploy |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret |
| `FRONTEND_BUCKET` | S3 bucket name |
| `CLOUDFRONT_DISTRIBUTION_ID` | CloudFront distribution ID |
