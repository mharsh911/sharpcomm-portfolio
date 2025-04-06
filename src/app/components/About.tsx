/* eslint-disable react/no-unescaped-entities */

export default function About() {
  return (
    <div className="p-10 bg-black text-white w-full flex flex-col md:flex-row md:items-center md:justify-center gap-4 min-h-[170px]">
      <div className="w-full md:w-[20%] text-[24px] md:text-left text-center leading-tight">
        ABOUT <span style={{ color: "#49C4DB" }}>US</span>
      </div>
      <div className="w-full md:w-[70%] text-[14px] md:text-left text-center leading-tight">
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
