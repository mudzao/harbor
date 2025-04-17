import { Metadata } from "next"

export interface BreadcrumbInfo {
  label: string
  parent?: string
}

export interface PageMetadata extends Metadata {
  customMeta?: {
    breadcrumb?: BreadcrumbInfo
  }
} 