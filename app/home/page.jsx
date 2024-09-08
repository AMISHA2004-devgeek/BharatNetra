import React from "react";
import Header from "../(components)/Header";
import Image from "next/image";
import hero from "../../assets/hero.png";
import { ImageError } from "next/dist/server/image-optimizer";
import { Button } from "@/components/ui/button";
import Tab from "./(components)/Tabs";
import CardGrid from "./(components)/CardGrid";
import Tabs from "./(components)/Tabs";
import Services from "./(components)/Services";
import Schemes from "./(components)/Schemes";
import { Separator } from "@/components/ui/separator";
import ContactPage from "./(components)/Conatct";

function page() {
  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
            <div className="rounded-full bg-emerald-800 p-1 px-2 hover:cursor-pointer">
              <p className="text-sm font-medium text-white ">011 24648354</p>
            </div>
            <p className="text-sm font-medium hover:cursor-pointer">
              support-moayush.nic.in
            </p>
          </div>
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-amber-900 md:text-4xl lg:text-6xl">
            India is a treasure trove of herbal plants, it is, in a way our
            Green Gold.
          </h1>
          <p className="mt-8 text-lg text-gray-700">
            A Decade of Transformative Growth in Ayush 2014-2024
          </p>
          <div className="mt-6 w-px hover:cursor-pointer">
            <Button className="bg-emerald-800">Download Pdf</Button>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <Image src={hero} className="mt-24"></Image>
        </div>
      </div>
      <div className="container mx-auto p-4">
      <div className="flex flex-wrap lg:flex-nowrap m-4">
        <div className="w-full lg:w-[450px] mb-4 lg:mb-0 lg:mr-4">
          <Tabs />
        </div>
        <div className="w-full lg:w-3/4">
          <CardGrid />
        </div>
      </div>
    </div>
      <Services />
      
<div className="container mx-auto px-4 py-8">
    <div className="max-w-4xl mx-auto mt-8 mb-8 p-6 bg-white border border-emerald-800 rounded-lg shadow-lg">
        <h1 className="text-xl md:text-2xl font-bold mb-4">National Ayush Mission (NAM)</h1>
        <p className="text-gray-700 mb-4 text-justify">
            Ministry of Ayush is implementing the Centrally Sponsored Scheme of National Ayush Mission (NAM) through States/UTs for providing better access to Ayush services by increasing the number of Ayush Hospitals and Dispensaries, upgrading Ayush hospitals/dispensaries, operationalizing Ayush Health and Wellness Centres by upgrading existing Ayush dispensaries and Sub Health Centres to provide comprehensive primary healthcare at the grassroots level with a focus on Ayush systems of medicine, mainstreaming of Ayush through co-location of Ayush facilities at Primary Health Centres (PHCs), Community Health Centres (CHCs) & District Hospitals (DHs), ensuring the availability of Ayush drugs and trained manpower, and Ayush Public Health programmes. NAM also aims at improving the quality of Ayush education through upgrading existing Ayush Educational Institutions and establishing new Ayush Colleges in the States where the availability of Ayush teaching institutions is inadequate in the Government Sector.
        </p>
        <button className="mt-4 px-4 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600">
            Read More
        </button>
    </div>
</div>
      <Schemes />
      <div className="mt-24">
      <h1 className="font-bold text-3xl text-center">
        Public Grievance Cell
      </h1>
      <div className="flex justify-center my-4">
        <Separator className="w-32 border-2 border-emerald-900" />
      </div>
      <h2 className="mt-10 p-6 px-14 text-justify">
        Centralised Public Grievance Redress and Monitoring System (CPGRAMS)
        is an online platform available to the citizens 24x7 to lodge their
        grievances to the public authorities on any subject related to service
        delivery. It is a single portal connected to all the
        Ministries/Departments of Government of India and States. Every
        Ministry and States have role-based access to this system. CPGRAMS is
        also accessible to the citizens through standalone mobile application
        downloadable through Google Play store and mobile application
        integrated with UMANG. The status of the grievance filed in CPGRAMS
        can be tracked with the unique registration ID provided at the time of
        registration of the complainant. CPGRAMS also provides an appeal
        facility to the citizens if they are not satisfied with the resolution
        by the Grievance Officer. After closure of grievance if the
        complainant is not satisfied with the resolution, he/she can provide
        feedback. If the rating is ‘Poor’ the option to file an appeal is
        enabled. The status of the Appeal can also be tracked by the
        petitioner with the grievance registration number.
      </h2>
    </div>
    <ContactPage/>
    </div>
  );
}

export default page;
