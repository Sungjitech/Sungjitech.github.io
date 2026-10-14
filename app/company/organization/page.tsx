import type { Metadata } from "next";
import type { CSSProperties } from "react";
import PageHeader from "@/components/PageHeader";
import { ORG, type OrgUnit } from "@/lib/content/company";

const UNIT_NAMES = ORG.units.map((u) => u.name.replace(/부$/, "")).join("·");

export const metadata: Metadata = {
  title: "조직도",
  description: `(주)성지테크 조직도 — 대표이사 직속 품질부와 ${UNIT_NAMES} 부서.`,
  alternates: { canonical: "/company/organization/" },
};

function Unit({ unit }: { unit: OrgUnit }) {
  return (
    <div className="org-unit">
      <p className="org-unit-name">{unit.name}</p>
      {unit.roles.length > 0 && (
        <ul>
          {unit.roles.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function OrganizationPage() {
  return (
    <>
      <PageHeader
        section="company"
        current="/company/organization/"
        title="조직도"
        lead="품질부는 생산 조직과 분리해 대표이사가 직접 관할합니다."
      />
      <div className="container page-body">
        <div className="org" role="group" aria-label="조직도">
          <div className="org-upper">
            <p className="org-box org-ceo">{ORG.ceo}</p>
            <div className="org-direct">
              <Unit unit={ORG.direct} />
            </div>
          </div>
          <p className="org-box org-exec">{ORG.executive}</p>
          <div className="org-units" style={{ "--org-cols": ORG.units.length } as CSSProperties}>
            {ORG.units.map((u) => (
              <Unit key={u.name} unit={u} />
            ))}
          </div>
          <p className="org-note">
            <span aria-hidden="true" />
            대표이사 직속 조직
          </p>
        </div>
      </div>
    </>
  );
}
