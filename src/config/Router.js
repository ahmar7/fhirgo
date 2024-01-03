import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Industry from "../pages/Industry";
import Services from "../pages/Services";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Top from "../components/Reusable/Top";
import Resources from "../pages/Resources";
import PrepareVisit from "../pages/SingleResource/Prepare-visit";
import Surgery from "../pages/SingleResource/Surgery";
import PrayerExchange from "../pages/SingleResource/Prayer-Exchange";
import Fhirbase from "../pages/Fhirbase";
import MedicalCoding from "../pages/Services/MedicalCoding";
import DenialManagement from "../pages/Services/DenialManagement";
import PracticeManagement from "../pages/Services/PracticeManagement";
import Revenue from "../pages/Services/Reveneue";

export default function Router() {
  return (
    <BrowserRouter>
      <Top />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/industry" element={<Industry />} />
        <Route index path="/services" element={<Services />} />
        <Route index path="/about-us" element={<About />} />
        <Route index path="/contact" element={<Contact />} />
        <Route index path="/resources" element={<Resources />} />
        <Route index path="/fhirbase" element={<Fhirbase />} />
        <Route index path="/medical-coding-2" element={<MedicalCoding />} />
        <Route
          index
          path="/services/practice-management"
          element={<PracticeManagement />}
        />
        <Route index path="/services/revenue" element={<Revenue />} />
        <Route
          index
          path="/services/denial-management"
          element={<DenialManagement />}
        />
        <Route
          index
          path="/resources/prepare-for-visit"
          element={<PrepareVisit />}
        />
        <Route index path="/resources/surgery-proccess" element={<Surgery />} />
        <Route index path="/resources/patients" element={<PrayerExchange />} />
      </Routes>
    </BrowserRouter>
  );
}
