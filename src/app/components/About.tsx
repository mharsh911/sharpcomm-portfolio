interface IAboutProps {}

export default function About(_props: IAboutProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        columnGap: 4,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "170px",
      }}
      className="p-10 bg-black text-white"
    >
      <div style={{ width: "50%", fontSize: "24px" }}>
        ABOUT <span style={{ color: "#49C4DB" }}>US</span>
      </div>
      <div style={{ fontSize: "14px" }}>
        Sharpcom Media is a film production and advertising agency with a pan
        India network. We tell stories that resonate. Specializing in prime
        visual content, we at Sharpcom are a young and passionate team exploring
        creative ideas not controlled by rules or tradition. Our practice is to
        always deliver beyond the client's expectations. Sharpcom has an
        extensive and diverse clientele. Some of these are - Ambuja Cement,
        Apollo Hospitals, Mankind Pharmaceuticals, HDFC Life, Uttar Pradesh
        Tourism, 112 Emergency Services, Khabri, Information and Public Relation
        Department, Anti Terror Squad and others.
      </div>
    </div>
  );
}
