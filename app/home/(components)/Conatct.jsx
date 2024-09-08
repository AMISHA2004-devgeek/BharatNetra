"use client";
import { Globe2Icon, MapIcon, PenIcon } from "lucide-react";
import React from "react";

function ContactPage() {
  return (
    <div className="p-6 m-10 bg-emerald-900 text-white rounded-xl">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 mb-8 md:mb-0">
          <div className="flex gap-2">
            <MapIcon className="mt-1" />
            <h2 className="text-2xl font-semibold mb-4">Location</h2>
          </div>

          <div className="space-y-4">
            <p>
              <strong>1. Ministry of Ayush</strong>
              <br />
              Ayush Bhawan, B Block, GPO Complex,
              <br />
              INA, New Delhi – 110023
            </p>
            <p>
              <strong>2. Ayush NBCC Office</strong>
              <br />
              Nbcc Central Courtyard Garden 1241-1340 Flats,
              <br />
              Block B, East Kidwai Nagar,
              <br />
              Kidwai Nagar, New Delhi, Delhi 110023
            </p>
          </div>
        </div>

        <div className="flex-1 mb-8 md:mb-0">
          <div className="flex gap-2">
            <Globe2Icon className="mt-1" />
            <h2 className="text-2xl font-semibold mb-4">
              Web Information Manager
            </h2>
          </div>

          <p>
            <strong>Ms. Kavita Garg, Joint Secretary</strong>
            <br />
            Room No.-212, Ayush Bhawan
            <br />
            GPO Complex, New Delhi-110023
          </p>
          <p>
            <strong>Content related query:</strong>
            <br />
            Phone:{" "}
            <a href="tel:01124651938" className="text-orange-500  hover:underline">
              011-24651938
            </a>
            <br />
            Email:{" "}
            <a
              href="mailto:webmanager-ayush@gov.in"
              className="text-orange-500  hover:underline"
            >
              webmanager-ayush@gov.in
            </a>
          </p>
        </div>

        <div className="flex-1">
          <div className="flex gap-2">
            <PenIcon className="mt-1" />
            <h2 className="text-2xl font-semibold mb-4">
              For General Inquiries
            </h2>
          </div>

          <p>
            <strong>MoA General Query:</strong>
            <br />
            Phone:{" "}
            <a href="tel:1800112202" className="text-orange-500 hover:underline">
              1800-11-22-02 (9:00 AM to 5:30 PM) (IST)
            </a>
          </p>
          <p>
            <strong>For Website Related Queries:</strong>
            <br />
            Phone:{" "}
            <a href="tel:01124648354" className="text-orange-500 hover:underline">
              011-24648354
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
