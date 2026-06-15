"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { submit } from "./actions";

export default function PainSignal() {
  const [productDescription, setProductDescription] = useState("");
  const [competitors, setCompetitors] = useState(["", "", ""]);

  // Handle changes for competitor inputs
  const handleCompetitorChange = (index, value) => {
    const updatedCompetitors = [...competitors];
    updatedCompetitors[index] = value;
    setCompetitors(updatedCompetitors);
  };

  async function handleSubmit() {
    await submit(competitors, productDescription);
  }

  return (
    <div className="min-h-screen bg-[#F5EFE7] text-[#3D352D] font-sans selection:bg-[#B86821]/20 relative overflow-hidden">
      {}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#E2D8CC] rounded-full blur-[120px] opacity-40 animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#DBCBB7] rounded-full blur-[100px] opacity-30 pointer-events-none" />

      {}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between bg-white/40 backdrop-blur-md border border-[#E7DDD2] px-6 py-3 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#B86821] rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-lg tracking-tight">
              PainSignal
            </span>
          </div>
          <p className="text-sm text-[#8F7A66] font-medium hidden sm:block">
            Find customer pain before competitors do
          </p>
        </div>
      </nav>

      {}
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-16 flex flex-col items-center">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-[#E7DDD2] text-[#B86821] text-xs font-medium mb-6 shadow-sm">
            <span className="w-2 h-2 bg-[#B86821] rounded-full animate-pulse" />
            Review Intelligence
          </div>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-6">
            Find Real Customer Pain
          </h1>
          <p className="text-lg text-[#8F7A66] max-w-xl mx-auto leading-relaxed">
            Describe a product and we'll uncover complaints, frustrations, unmet
            needs, and startup opportunities hidden inside customer reviews.
          </p>
        </div>

        {/* Input Card */}
        <div className="w-full bg-white/70 backdrop-blur-lg border border-[#E7DDD2] p-2 rounded-[32px] shadow-sm mb-6 transition-all hover:shadow-md duration-500">
          <textarea
            className="w-full h-48 bg-transparent p-6 text-lg placeholder-[#AFA192] outline-none resize-none"
            placeholder="Example:&#10;Typeform is a form builder used by businesses to collect leads, surveys, and customer feedback..."
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
          <div className="flex justify-end p-2">
            <button
              onClick={handleSubmit}
              className="bg-[#B86821] text-white px-8 py-3 rounded-[18px] font-medium transition-all hover:bg-[#a05a1d] hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              Analyze Pain <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {competitors.map((comp, i) => (
            <input
              key={i}
              type="text"
              placeholder={`Competitor ${i + 1}`}
              value={comp}
              onChange={(e) => handleCompetitorChange(i, e.target.value)}
              className="w-full bg-white/50 border border-[#E7DDD2] rounded-2xl px-5 py-3 text-sm text-[#3D352D] placeholder-[#AFA192] outline-none focus:border-[#B86821] focus:ring-1 focus:ring-[#B86821] transition-all"
            />
          ))}
        </div>
      </main>
    </div>
  );
}
