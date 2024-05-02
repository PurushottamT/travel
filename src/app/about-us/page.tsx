"use client";
import Hero from "../../pages/about/hero.page";
import Section from "../../pages/about/Section";
// import Footer from '../../pages/layout/Footer'

export default function Page() {
  return (
    <>
      <main className="bg-slate-200">
        <Hero />
        <Section />
        {/* <Footer /> */}
      </main>
    </>
  );
}
