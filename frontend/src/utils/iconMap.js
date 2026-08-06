import {
  Home as HomeIcon,
  Building2,
  Truck,
  Warehouse,
  PackageCheck,
  Globe2,
  Boxes,
  ShieldCheck,
  Users,
  MapPin,
  Clock,
  Headset,
  Package,
  ClipboardList,
  FileCheck2,
} from 'lucide-react'

const ICON_MAP = {
  Home: HomeIcon,
  Building2,
  Truck,
  Warehouse,
  PackageCheck,
  Globe2,
  Boxes,
  ShieldCheck,
  Users,
  MapPin,
  Clock,
  Headset,
  Package,
  ClipboardList,
  FileCheck2,
}

export const getIcon = (name) => ICON_MAP[name] || Package
