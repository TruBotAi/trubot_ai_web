import { ReactNode } from "react";
import Link from "next/link";

interface PlatformCardProps {
  name: string;
  feature: string;
  icon?: ReactNode;
  href?: string;
  className?: string;
}

export default function PlatformCard({
  name,
  feature,
  icon,
  href,
  className = "",
}: PlatformCardProps) {
  return href ? (
    <Link
      href={href}
      className={`block bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      {icon && <div className="text-4xl mb-4">{icon}</div>}

      <h4 className="text-lg font-semibold text-navy mb-1">{name}</h4>

      <p className="text-sm text-gray-600">{feature}</p>
    </Link>
  ) : (
    <div
      className={`block bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      {icon && <div className="text-4xl mb-4">{icon}</div>}

      <h4 className="text-lg font-semibold text-navy mb-1">{name}</h4>

      <p className="text-sm text-gray-600">{feature}</p>
    </div>
  );
}
