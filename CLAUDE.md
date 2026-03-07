# Claude Code Instructions - thekevinsingh.com

## Quick Commands

```bash
# Dev server
cd frontend && npm install && ng serve    # http://localhost:4200

# Production build
cd frontend && ng build --configuration production

# Deploy (automated via GitHub Actions on push to develop/main)
```

## Project Structure

```
thekevinsinghDOTcom/
  frontend/               # Angular 15 + Bootstrap 5 + Ionic
    src/app/
      landing/             # Landing page module (lazy loaded)
        home/              # Home page
        aboutme/           # About me page
        hireme/            # Hire me / contact page (EmailJS)
        projects/          # Projects showcase
        topics/            # Blog topics list
        topic-detail/      # Individual topic page
        admin/             # Admin page
      shared/              # Header + footer components
      global_services/     # JSON manager, loading spinner, toast
      guard/               # Auth guard
      interceptors/        # HTTP spinner interceptor
      spinner/             # Loading spinner component
      toast/               # Toast notification component
    src/assets/
      json/                # Static data (resume, projects, topics, github-projects)
      img/                 # Images (avatars, company logos, nature, tech)
      fonts/               # FontAwesome, Ionicons
  infrastructure/
    terraform/aws/         # S3 + CloudFront + optional Route53
  .github/workflows/
    ci.yml                 # Build + deploy on push to develop/main
```

## Architecture

- **Framework**: Angular 15 with lazy-loaded landing module
- **UI**: Bootstrap 5 + Ionic components
- **Data**: Static JSON files in `src/assets/json/` (no backend API)
- **Contact**: EmailJS for hire me form
- **Charts**: Chart.js via ng2-charts
- **Routing**: Angular Router with auth guard

## Infrastructure

- **Hosting**: S3 (private, versioned, AES-256) + CloudFront (HTTPS, HTTP/2+3)
- **IaC**: Terraform in `infrastructure/terraform/aws/`
- **CI/CD**: GitHub Actions deploys on push to `develop` or `main`
- **IAM**: Dedicated `thekevinsingh-github-actions` user with scoped S3/CloudFront policy
- **State**: Terraform state in `s3://zerve-terraform-state` key `thekevinsingh/dev/terraform.tfstate`

## Key Files

| Task | File(s) |
|------|---------|
| Add a page | Create component in `frontend/src/app/landing/`, add route in `landing-routing.module.ts` |
| Edit site content | Modify JSON in `frontend/src/assets/json/` |
| Update styling | Edit component `.css`/`.scss` or `frontend/src/styles.css` |
| Modify infra | Edit `infrastructure/terraform/aws/*.tf` |
| Update CI/CD | Edit `.github/workflows/ci.yml` |

## Deploy Info

| Resource | Value |
|----------|-------|
| S3 Bucket | `thekevinsingh-dev-frontend-396326422827` |
| CloudFront ID | `E1GYZMRQ42S0N7` |
| Live URL | `https://d31q41f95i2by7.cloudfront.net` |
| Terraform State | `s3://zerve-terraform-state` key `thekevinsingh/dev/terraform.tfstate` |
| IAM User | `thekevinsingh-github-actions` |

## Coding Conventions

- Components use Angular CLI naming: `name.component.ts/html/css`
- Services in `global_services/` are singleton (providedIn: root)
- Landing module is lazy loaded via `loadChildren` in `app-routing.module.ts`
- Static data lives in JSON files under `assets/json/`, loaded via `JsonManagerService`
- No backend — this is a purely static Angular site
