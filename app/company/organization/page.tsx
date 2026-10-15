import type { Metadata } from "next";
import type { CSSProperties } from "react";
import PageHeader from "@/components/PageHeader";
import { ORG, type OrgUnit } from "@/lib/content/company";

const UNIT_NAMES = ORG.units.map((u) => u.name.replace(/부$/, "")).join("·");
const SUMMARY = `${ORG.executive} 아래 ${UNIT_NAMES} ${ORG.units.length}개 부서를 두고 있습니다.`;

export const metadata: Metadata = {
  title: "조직도",
  description: `(주)성지테크 조직도. ${SUMMARY}`,
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
        lead={SUMMARY}
      />
      <div className="container page-body">
        <div className="org" role="group" aria-label="조직도">
          <p className="org-box org-ceo">{ORG.ceo}</p>
          <p className="org-box org-exec">{ORG.executive}</p>
          <div className="org-units" style={{ "--org-cols": ORG.units.length } as CSSProperties}>
            {ORG.units.map((u) => (
              <Unit key={u.name} unit={u} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
