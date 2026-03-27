const REPORT_DATA = {
    refNo: "PM-992384-B",
    reportDate: "14 OCT 2025",
    registrationNo: "AP05BN1922",
    vehicleName: "MARUTI BALENO ZETA",
    client: "EQUITAS SMALL FINANCE BANK LTD",
    branch: "VISAKHAPATNAM",
    dateOfInspection: "26-OCT-2025",
    placeOfInspection: "VISAKHAPATNAM",
    overallScore: 8.4,
    marketValue: "8,45,000",
    assetIdentity: {
        owner: "A VENKATESWARA RAO",
        applicant: "V PRADEEP KISHORE",
        chassisNumber: "MA3EHKD1S00926030",
        engineNumber: "K12MN162428",
        manufactureYear: "SEP-2015",
        registeredOn: "01-OCT-2016",
        fuelType: "DIESEL",
        transmission: "MANUAL",
        colour: "PEARL WHITE",
        odoMeter: "12345",
        vehicleType: "COMMERCIAL",
        ownershipNumber: "1"
    },
    vahanDetails: {
        registrationNumber: "AP05BN1922",
        chassisNumber: "MA3EHKD1S00926030",
        engineNumber: "K12MN162428",
        vehicleMake: "MARUTI SUZUKI INDIA LTD",
        vehicleModel: "BALENO ZETA",
        vehicleCategory: "MOTOR CAR",
        vehicleClass: "LMV",
        bodyType: "HATCH BACK",
        vehicleColor: "SUPERIOR WHITE",
        registeredAtRto: "KAKINADA RTA",
        ownerSerialNumber: "1",
        yearOfManufacture: "01-09-2015",
        dateOfRegistration: "01-10-2016",
        engineCubicCapacity: "1248 CC",
        grossVehicleWeight: "16200 GVW",
        seatingCapacity: "5",
        fuelType: "PETROL",
        fuelNorms: "BHARAT STAGE VI",
        nocDetails: "---",
        challanDetails: "---"
    },
    regulatory: [
        { label: "COMPREHENSIVE INSURANCE", status: "ACTIVE", sub: "Policy: #UIIC/1922/001 | IDV: ₹ 4,80,000", expiry: "EXP: OCT 2026" },
        { label: "HYPOTHECATION (STATUS)", status: "FREE OF LIEN", sub: "CLEAN / NO LIEN DETECTED", action: "READY FOR TRANSFER" },
        { label: "NATIONAL PERMIT", status: "ACTIVE", sub: "AP123456789", expiry: "EXP: OCT 2026" },
        { label: "FITNESS CERTIFICATE", status: "---", sub: "" },
        { label: "CHASSIS VERIFICATION", status: "GOOD", sub: "", image: "https://picsum.photos/seed/chassis1/600/400" },
        { label: "CHASSIS STENCIL TRACE", status: "GOOD", sub: "", image: "https://picsum.photos/seed/stencil1/600/400" }
    ],
    systemScores: {
        basic: { score: "8.2/10", items: [
            { name: "ENGINE CONDITION", status: "GOOD" },
            { name: "CHASSIS CONDITION", status: "GOOD" },
            { name: "CABIN ASSY", status: "GOOD" },
            { name: "STEERING SYSTEM", status: "GOOD" },
            { name: "BRAKE SYSTEM", status: "GOOD" },
            { name: "ELECTRICAL SYSTEM", status: "GOOD" },
            { name: "SUSPENSION SYSTEM", status: "GOOD" },
            { name: "FUEL SYSTEM", status: "GOOD" },
            { name: "TYRE CONDITION", status: "AVERAGE" },
            { name: "TYRE CONDITION", status: "POOR" }
        ]},
        cabin: { score: "9.5/10", items: [
            { name: "CABIN", status: "GOOD" },
            { name: "DASHBOARD", status: "GOOD" },
            { name: "DOORS", status: "GOOD" },
            { name: "ALL GLASSES", status: "GOOD" },
            { name: "SEATS", status: "GOOD" }
        ]},
        loadBody: { score: "9.0/10", items: [
            { name: "RIGHT SIDE GATE", status: "GOOD" },
            { name: "LEFT SIDE GATE", status: "GOOD" },
            { name: "TAIL GATE", status: "GOOD" },
            { name: "LOAD FLOOR", status: "GOOD" }
        ]},
        brakes: { score: "9.0/10", items: [
            { name: "FRONT BRAKES", status: "GOOD" },
            { name: "REAR BRAKES", status: "GOOD" },
            { name: "HAND BRAKE", status: "GOOD" },
            { name: "ABS", status: "GOOD" }
        ]},
        steering: { score: "9.0/10", items: [
            { name: "STEERING WHEEL", status: "GOOD" },
            { name: "STEERING COLUMN", status: "GOOD" },
            { name: "STEERING BOX", status: "GOOD" },
            { name: "STEERING LINKAGES", status: "GOOD" }
        ]},
        transmission: { score: "9.0/10", items: [
            { name: "GEARBOX ASSY", status: "GOOD" },
            { name: "CLUTCH SYSTEM", status: "GOOD" },
            { name: "DIFFERENTIAL ASSY", status: "GOOD" }
        ]},
        cooling: { score: "9.0/10", items: [
            { name: "RADIATOR", status: "GOOD" },
            { name: "INTER COOLER", status: "GOOD" },
            { name: "ALL HOSE PIPES", status: "GOOD" }
        ]},
        electrical: { score: "9.0/10", items: [
            { name: "LIGHTS", status: "GOOD" },
            { name: "BATTERY", status: "GOOD" },
            { name: "WIRING ASSY", status: "GOOD" }
        ]},
        suspension: { score: "9.0/10", items: [
            { name: "FRONT SUSPENSION", status: "GOOD" },
            { name: "REAR SUSPENSION", status: "GOOD" },
            { name: "FRONT & REAR AXLES", status: "GOOD" }
        ]},
        other: { score: "7.5/10", items: [
            { name: "AIR CONDITIONER", status: "NO" },
            { name: "AUDIO", status: "NO" },
            { name: "UPHOLESHTRY", status: "GOOD" },
            { name: "LOAD CARRIER", status: "YES" },
            { name: "FRONT CRASH GUARD", status: "NO" },
            { name: "REAR UNDER RUN PROTECTION", status: "NO" },
            { name: "SIDE UNDER RUN PROTECTION", status: "NO" },
            { name: "SUN ROOF", status: "NO" }
        ]}
    },
    remarks: "Vehicle found in good road worthy condition. Engine sound is normal, transmission is smooth. Minor surface scratches observed on rear bumper. Overall maintenance is excellent. Highly recommended for refinance/retail.",
    inspector: "Jagadeesh Kumar",
    designation: "Head - Operations"
};

// --- Helper Components (Functions that return HTML strings) ---

function getStatusBadge(status) {
    const colors = {
        GOOD: "bg-emerald-100 text-emerald-700",
        AVERAGE: "bg-orange-100 text-orange-700",
        POOR: "bg-red-100 text-red-700",
        YES: "bg-emerald-100 text-emerald-700",
        NO: "bg-red-100 text-red-700",
        ACTIVE: "bg-emerald-100 text-emerald-700",
        "FREE OF LIEN": "bg-blue-100 text-blue-700",
    };
    return `<span class="px-2 py-0.5 rounded text-[11px] font-bold uppercase ${colors[status] || 'bg-gray-100 text-gray-600'}">${status}</span>`;
}

function getReportHeader(pageNum) {
    return `
        <div class="relative">
            <div class="flex justify-between items-end border-b-2 border-[#009688] pb-3 mb-6">
                <div class="flex items-center gap-3">
                    <div class="text-4xl font-black tracking-tighter text-[#009688] flex items-center">
                        VEHG<span class="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#009688] ml-1 bg-[#f2f9f8]"><i data-lucide="check-circle-2" class="w-5 h-5"></i></span>
                    </div>
                </div>
                <div class="text-right text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-tight">
                    <div class="mb-1">REF NO: <span class="text-[#1a1a1a] font-black">${REPORT_DATA.refNo}</span></div>
                    <div>DATE: <span class="text-[#1a1a1a] font-black">${REPORT_DATA.reportDate}</span></div>
                </div>
            </div>
        </div>
    `;
}

function getReportFooter(pageNum) {
    const isFirstPage = pageNum === 1;
    return `
        <div class="page-footer">
            <div class="flex justify-between items-center w-full">
                <div class="flex items-center gap-2 min-w-[150px]">
                    ${!isFirstPage ? `
                        <div class="w-2 h-2 rounded-full bg-[#009688]"></div>
                        <span>VEHGA INSPECTION SERVICES PVT LTD</span>
                    ` : ''}
                </div>
                <div class="text-[#009688] font-black">PAGE ${pageNum} OF 6</div>
                <div class="flex items-center gap-2 min-w-[150px] justify-end">
                    ${!isFirstPage ? `
                        <span>WWW.VEHGA.COM</span>
                        <div class="w-2 h-2 rounded-full bg-[#009688]"></div>
                    ` : ''}
                </div>
            </div>
            <div class="text-[7px] text-gray-400 font-medium tracking-normal normal-case text-center border-t border-gray-50 pt-1">
                NOTE: THIS IS A DIGITALLY GENERATED REPORT, HENCE NO PHYSICAL SIGNATURE IS REQUIRED. VERIFIED VIA PRONTO SECURE CLOUD.
            </div>
        </div>
    `;
}

function getSectionTitle(title, iconName) {
    return `
        <div class="flex items-center gap-2 mb-2 mt-4 first:mt-0">
            <div class="w-5 h-5 rounded bg-[#e6f5f3] flex items-center justify-center">
                <i data-lucide="${iconName}" class="w-3 h-3 text-[#009688]"></i>
            </div>
            <h2 class="text-[13px] font-black tracking-widest text-[#1a1a1a] uppercase">
                ${title}
            </h2>
            <div class="flex-1 h-[1px] bg-gray-100 ml-2"></div>
        </div>
    `;
}

function getInfoItem(label, value, highlight = false, unit = '') {
    return `
        <div class="flex justify-between items-center py-1.5 px-3 group transition-colors">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">${label}</span>
            <div class="flex items-baseline gap-1">
                <span class="text-[12px] font-black ${highlight ? 'text-blue-600' : 'text-slate-700'} tracking-tight">
                    ${value}
                </span>
                ${unit ? `<span class="text-[9px] font-bold text-slate-400 uppercase opacity-60">${unit}</span>` : ''}
            </div>
        </div>
    `;
}

function getScoreList(title, score, items, iconName) {
    const itemsHtml = items.map(item => `
        <div class="flex justify-between items-center text-[10px]">
            <span class="font-bold text-gray-500 uppercase tracking-tighter">${item.name}</span>
            ${getStatusBadge(item.status)}
        </div>
    `).join('');

    return `
        <div class="bg-slate-50 rounded-xl p-2 border border-[#eef2f6]">
            <div class="flex justify-between items-center mb-1.5 pb-1 border-b border-[#f1f5f9]">
                <div class="flex items-center gap-1.5">
                    <i data-lucide="${iconName}" class="w-3 h-3 text-[#009688]"></i>
                    <h3 class="text-[11px] font-black uppercase tracking-wider text-[#1a1a1a]">${title}</h3>
                </div>
                <span class="bg-[#1a1a1a] text-white text-[10px] font-black px-1.5 py-0.5 rounded">SCORE: ${score}</span>
            </div>
            <div class="space-y-0.5">
                ${itemsHtml}
            </div>
        </div>
    `;
}

// --- Page Generators ---

function renderPage1() {
    return `
        <div class="report-page">
            <div class="page-content">
                ${getReportHeader(1)}
                <div class="flex justify-between items-center mb-2">
                    <h1 class="text-3xl font-black text-[#009688] tracking-tight">${REPORT_DATA.registrationNo}</h1>
                    <div class="flex items-center gap-2">
                        <span class="bg-[#009688] text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest">RETAIL</span>
                        <span class="bg-[#1a1a1a] text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase">CERTIFIED</span>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-3 mb-1">
                    <div class="col-span-7 relative">
                        <div class="rounded-lg overflow-hidden border-4 border-[#f5f5f5] shadow-inner aspect-[4/3]">
                            <img src="https://picsum.photos/seed/car1/800/600" alt="Vehicle Front" class="w-full h-full object-cover" referrerPolicy="no-referrer">
                        </div>
                        <div class="mt-1 bg-[#e6f5f3] text-[#009688] text-center py-0.5 rounded-lg text-xs font-bold tracking-widest uppercase">
                            ${REPORT_DATA.vehicleName}
                        </div>
                    </div>
                    <div class="col-span-5 flex flex-col gap-2">
                        <div class="bg-[#f5f5f5] rounded-2xl p-3 flex flex-col items-center justify-center border border-[#e5e7eb] flex-1">
                            <span class="text-[10px] font-bold text-[#009688] uppercase tracking-widest mb-1">OVERALL VEHICLE SCORE</span>
                            <div class="relative w-20 h-20 flex items-center justify-center">
                                <svg class="w-full h-full -rotate-90">
                                    <circle cx="40" cy="40" r="36" fill="none" stroke="#e5e7eb" stroke-width="5" />
                                    <circle cx="40" cy="40" r="36" fill="none" stroke="#009688" stroke-width="5" stroke-dasharray="226.19" stroke-dashoffset="${226.19 * (1 - REPORT_DATA.overallScore / 10)}" stroke-linecap="round" />
                                </svg>
                                <div class="absolute inset-0 flex flex-col items-center justify-center">
                                    <span class="text-xl font-black text-[#1a1a1a]">${REPORT_DATA.overallScore}</span>
                                    <span class="text-[9px] font-bold text-gray-400">/ 10</span>
                                </div>
                            </div>
                            <div class="mt-1 bg-white px-2 py-0.5 rounded border border-[#e5e7eb] text-[9px] font-bold text-[#009688]">VERIFIED CLEAN</div>
                        </div>
                        <div class="bg-[#009688] rounded-2xl p-3 text-white flex flex-col items-center justify-center shadow-lg">
                            <span class="text-[10px] font-bold uppercase tracking-widest mb-0.5">ESTIMATED MARKET VALUE</span>
                            <div class="text-xl font-black">₹ ${REPORT_DATA.marketValue}</div>
                            <span class="text-[9px] italic mt-0.5">Calculated based on current market trends</span>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-x-8 gap-y-1 mb-2 border-y border-[#e5e7eb] py-1.5">
                    <div class="flex justify-between items-center"><span class="text-[11px] font-bold text-gray-400 uppercase">CLIENT</span><span class="text-[12px] font-bold text-[#1a1a1a]">${REPORT_DATA.client}</span></div>
                    <div class="flex justify-between items-center"><span class="text-[11px] font-bold text-gray-400 uppercase">BRANCH</span><span class="text-[12px] font-bold text-[#1a1a1a]">${REPORT_DATA.branch}</span></div>
                    <div class="flex justify-between items-center"><span class="text-[11px] font-bold text-gray-400 uppercase">DATE OF INSPECTION</span><span class="text-[12px] font-bold text-[#1a1a1a]">${REPORT_DATA.dateOfInspection}</span></div>
                    <div class="flex justify-between items-center"><span class="text-[11px] font-bold text-gray-400 uppercase">PLACE OF INSPECTION</span><span class="text-[12px] font-bold text-[#1a1a1a]">${REPORT_DATA.placeOfInspection}</span></div>
                </div>
                ${getSectionTitle("ASSET IDENTITY", "car")}
                <div class="grid grid-cols-2 border border-[#eef2f6] rounded-lg overflow-hidden mb-2">
                    ${[
                        { label: "OWNER", value: REPORT_DATA.assetIdentity.owner },
                        { label: "FUEL TYPE", value: REPORT_DATA.assetIdentity.fuelType },
                        { label: "APPLICANT", value: REPORT_DATA.assetIdentity.applicant },
                        { label: "TRANSMISSION", value: REPORT_DATA.assetIdentity.transmission },
                        { label: "CHASSIS NUMBER", value: REPORT_DATA.assetIdentity.chassisNumber },
                        { label: "COLOUR", value: REPORT_DATA.assetIdentity.colour },
                        { label: "ENGINE NUMBER", value: REPORT_DATA.assetIdentity.engineNumber },
                        { label: "ODO METER", value: Number(REPORT_DATA.assetIdentity.odoMeter).toLocaleString(), unit: "KM" },
                        { label: "MANUFACTURE YEAR", value: REPORT_DATA.assetIdentity.manufactureYear },
                        { label: "VEHICLE TYPE", value: REPORT_DATA.assetIdentity.vehicleType },
                        { label: "REGISTERED ON", value: REPORT_DATA.assetIdentity.registeredOn },
                        { label: "OWNERSHIP NUMBER", value: REPORT_DATA.assetIdentity.ownershipNumber }
                    ].map((item, idx) => `
                        <div class="${Math.floor(idx / 2) % 2 === 0 ? 'bg-white' : 'bg-[#fcfdfe]'} border-b border-slate-100 last:border-b-0 ${idx % 2 === 0 ? 'border-r border-slate-100' : ''}">
                            ${getInfoItem(item.label, item.value, false, item.unit)}
                        </div>
                    `).join('')}
                </div>
                <div class="flex justify-between items-end">
                    <div class="flex-1">
                        ${getSectionTitle("CONDITION VERDICT", "shield-check")}
                        <div class="grid grid-cols-2 gap-1.5 max-w-md">
                            <div class="flex justify-between items-center bg-slate-50 p-1 rounded border border-[#eef2f6]"><span class="text-[11px] font-bold text-gray-500 uppercase">CABIN</span>${getStatusBadge("GOOD")}</div>
                            <div class="flex justify-between items-center bg-slate-50 p-1 rounded border border-[#eef2f6]"><span class="text-[11px] font-bold text-gray-500 uppercase">ENGINE</span>${getStatusBadge("GOOD")}</div>
                            <div class="flex justify-between items-center bg-slate-50 p-1 rounded border border-[#eef2f6]"><span class="text-[11px] font-bold text-gray-500 uppercase">LOAD BODY</span>${getStatusBadge("GOOD")}</div>
                            <div class="flex justify-between items-center bg-slate-50 p-1 rounded border border-[#eef2f6]"><span class="text-[11px] font-bold text-gray-500 uppercase">OTHER SYSTEMS</span>${getStatusBadge("GOOD")}</div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-1.5 items-end">
                        <div class="bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <i data-lucide="check-circle-2" class="w-2.5 h-2.5 text-emerald-600"></i>
                            <span class="text-[9px] font-bold text-emerald-700 uppercase">DEDUPE: VERIFIED CLEAN</span>
                        </div>
                        <button class="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded-lg border border-blue-200 text-[10px] font-bold uppercase tracking-wider hover:bg-blue-100 transition-colors">
                            <i data-lucide="video" class="w-3 h-3"></i> VIDEO LINK
                        </button>
                        <button class="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded-lg border border-blue-200 text-[10px] font-bold uppercase tracking-wider hover:bg-blue-100 transition-colors">
                            <i data-lucide="image" class="w-3 h-3"></i> IMAGES LINK
                        </button>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-4 mt-4">
                    <div class="col-span-6">
                        <div class="bg-slate-50 rounded-lg p-4 border border-[#eef2f6] h-full">
                            <h4 class="text-[10px] font-black text-gray-400 uppercase mb-2 tracking-widest">INSPECTOR'S REMARKS</h4>
                            <p class="text-[12px] leading-relaxed text-gray-700 font-medium italic">"${REPORT_DATA.remarks}"</p>
                        </div>
                    </div>
                    <div class="col-span-2 flex flex-col items-center justify-center bg-white rounded-2xl border border-[#e5e7eb] p-2">
                        <i data-lucide="qr-code" class="w-10 h-10 text-[#1a1a1a] mb-1"></i>
                        <span class="text-[8px] font-black text-gray-400 uppercase text-center">SCAN TO<br />VERIFY</span>
                    </div>
                    <div class="col-span-4 text-right flex flex-col justify-end">
                        <div class="mb-2">
                            <div class="text-[10px] font-black text-gray-400 uppercase mb-1 tracking-widest">DIGITAL SIGNATURE</div>
                            <div class="font-serif text-2xl text-[#009688] opacity-80 select-none italic">${REPORT_DATA.inspector}</div>
                            <div class="h-[1px] bg-gray-200 w-full mt-1"></div>
                        </div>
                        <div class="text-[14px] font-black text-[#1a1a1a]">${REPORT_DATA.inspector}</div>
                        <div class="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">${REPORT_DATA.designation}</div>
                        <div class="mt-2 flex flex-col items-end">
                            <div class="flex items-center gap-1 text-[#009688] bg-[#f2f9f8] px-2 py-0.5 rounded-full border border-[#ccf2ef]">
                                <span class="text-[8px] font-black uppercase">AUDIT STATUS: CERTIFIED</span>
                                <i data-lucide="shield-check" class="w-3 h-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ${getReportFooter(1)}
        </div>
    `;
}

function renderPage2() {
    return `
        <div class="report-page">
            <div class="page-content">
                ${getReportHeader(2)}
                ${getSectionTitle("VAHAN DETAILS", "file-text")}
                <div class="grid grid-cols-2 border border-[#eef2f6] rounded-lg overflow-hidden mb-4">
                    ${[
                        { label: "REGISTRATION NUMBER", value: REPORT_DATA.vahanDetails.registrationNumber, highlight: true },
                        { label: "OWNER SERIAL NUMBER", value: REPORT_DATA.vahanDetails.ownerSerialNumber },
                        { label: "CHASSIS NUMBER", value: REPORT_DATA.vahanDetails.chassisNumber },
                        { label: "YEAR OF MANUFACTURE", value: REPORT_DATA.vahanDetails.yearOfManufacture },
                        { label: "ENGINE NUMBER", value: REPORT_DATA.vahanDetails.engineNumber },
                        { label: "DATE OF REGISTRATION", value: REPORT_DATA.vahanDetails.dateOfRegistration },
                        { label: "VEHICLE MAKE", value: REPORT_DATA.vahanDetails.vehicleMake },
                        { label: "ENGINE CUBIC CAPACITY", value: REPORT_DATA.vahanDetails.engineCubicCapacity.replace(' CC', ''), unit: "CC" },
                        { label: "VEHICLE MODEL", value: REPORT_DATA.vahanDetails.vehicleModel },
                        { label: "GROSS VEHICLE WEIGHT", value: REPORT_DATA.vahanDetails.grossVehicleWeight.replace(' GVW', ''), unit: "KG" },
                        { label: "VEHICLE CATEGORY", value: REPORT_DATA.vahanDetails.vehicleCategory },
                        { label: "SEATING CAPACITY", value: REPORT_DATA.vahanDetails.seatingCapacity, unit: "SEATS" },
                        { label: "VEHICLE CLASS", value: REPORT_DATA.vahanDetails.vehicleClass },
                        { label: "FUEL TYPE", value: REPORT_DATA.vahanDetails.fuelType },
                        { label: "BODY TYPE", value: REPORT_DATA.vahanDetails.bodyType },
                        { label: "FUEL NORMS", value: REPORT_DATA.vahanDetails.fuelNorms },
                        { label: "VEHICLE COLOR", value: REPORT_DATA.vahanDetails.vehicleColor },
                        { label: "NOC DETAILS", value: REPORT_DATA.vahanDetails.nocDetails },
                        { label: "REGISTERED AT RTO", value: REPORT_DATA.vahanDetails.registeredAtRto },
                        { label: "CHALLAN DETAILS", value: REPORT_DATA.vahanDetails.challanDetails }
                    ].map((item, idx) => `
                        <div class="${Math.floor(idx / 2) % 2 === 0 ? 'bg-white' : 'bg-[#fcfdfe]'} border-b border-slate-100 last:border-b-0 ${idx % 2 === 0 ? 'border-r border-slate-100' : ''}">
                            ${getInfoItem(item.label, item.value, item.highlight, item.unit)}
                        </div>
                    `).join('')}
                </div>
                ${getSectionTitle("REGULATORY DOCUMENTS & INSURANCE", "shield-check")}
                <div class="space-y-1.5 mb-2 bg-slate-50 p-4 rounded-lg border border-[#eef2f6]">
                    ${REPORT_DATA.regulatory.map(item => `
                        <div class="flex items-center justify-between p-2 bg-white rounded-lg border border-[#f1f5f9] overflow-hidden shadow-sm">
                            <div class="flex items-center gap-2">
                                <div class="w-7 h-7 rounded-full bg-white flex items-center justify-center border border-[#e5e7eb] shrink-0">
                                    <i data-lucide="check-circle-2" class="w-4 h-4 ${item.status === '---' ? 'text-gray-300' : 'text-emerald-500'}"></i>
                                </div>
                                <div>
                                    <h4 class="text-[11px] font-black text-[#1a1a1a] uppercase">${item.label}</h4>
                                    ${item.sub ? `<p class="text-[10px] text-gray-500 font-medium">${item.sub}</p>` : ''}
                                </div>
                            </div>
                            <div class="flex items-center gap-4">
                                ${!item.image ? `
                                    <div class="text-right">
                                        ${getStatusBadge(item.status)}
                                        ${item.expiry ? `<div class="text-[8px] font-bold text-gray-400 mt-0.5 uppercase">${item.expiry}</div>` : ''}
                                        ${item.action ? `<div class="text-[8px] font-black text-emerald-600 mt-0.5 uppercase">${item.action}</div>` : ''}
                                    </div>
                                ` : `
                                    <div class="h-20 w-[480px] rounded-lg overflow-hidden border border-[#e5e7eb] shadow-sm">
                                        <img src="${item.image}" alt="${item.label}" class="w-full h-full object-cover" referrerPolicy="no-referrer">
                                    </div>
                                `}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            ${getReportFooter(2)}
        </div>
    `;
}

function renderPage3() {
    return `
        <div class="report-page">
            <div class="page-content">
                ${getReportHeader(3)}
                <div class="grid grid-cols-2 gap-2">
                    ${getScoreList("BASIC SYSTEMS", REPORT_DATA.systemScores.basic.score, REPORT_DATA.systemScores.basic.items, "gauge")}
                    ${getScoreList("CABIN ASSEMBLY", REPORT_DATA.systemScores.cabin.score, REPORT_DATA.systemScores.cabin.items, "user")}
                    ${getScoreList("BRAKES", REPORT_DATA.systemScores.brakes.score, REPORT_DATA.systemScores.brakes.items, "disc")}
                    ${getScoreList("LOAD BODY", REPORT_DATA.systemScores.loadBody.score, REPORT_DATA.systemScores.loadBody.items, "car")}
                    ${getScoreList("STEERING SYSTEM", REPORT_DATA.systemScores.steering.score, REPORT_DATA.systemScores.steering.items, "settings")}
                    ${getScoreList("TRANSMISSION SYSTEM", REPORT_DATA.systemScores.transmission.score, REPORT_DATA.systemScores.transmission.items, "zap")}
                    ${getScoreList("COOLING SYSTEM", REPORT_DATA.systemScores.cooling.score, REPORT_DATA.systemScores.cooling.items, "wind")}
                    ${getScoreList("ELECTRICAL SYSTEM", REPORT_DATA.systemScores.electrical.score, REPORT_DATA.systemScores.electrical.items, "zap")}
                    ${getScoreList("SUSPENSION SYSTEM", REPORT_DATA.systemScores.suspension.score, REPORT_DATA.systemScores.suspension.items, "gauge")}
                    ${getScoreList("OTHER SYSTEMS", REPORT_DATA.systemScores.other.score, REPORT_DATA.systemScores.other.items, "settings")}
                </div>
            </div>
            ${getReportFooter(3)}
        </div>
    `;
}

function renderPage4() {
    const images = [
        { label: "FRONT VIEW", seed: "car_front" },
        { label: "REAR VIEW", seed: "car_rear" },
        { label: "FRONT RIGHT", seed: "car_fr" },
        { label: "FRONT LEFT", seed: "car_fl" },
        { label: "REAR RIGHT", seed: "car_rr" },
        { label: "REAR LEFT", seed: "car_rl" }
    ];
    return `
        <div class="report-page">
            <div class="page-content">
                ${getReportHeader(4)}
                <div class="grid grid-cols-2 gap-6 mb-6">
                    ${images.map(img => `
                        <div class="space-y-2">
                            <div class="rounded-lg overflow-hidden border-2 border-[#f5f5f5] aspect-[4/3] relative">
                                <img src="https://picsum.photos/seed/${img.seed}/800/600" alt="${img.label}" class="w-full h-full object-cover" referrerPolicy="no-referrer">
                                <div class="absolute bottom-2 right-2 text-[8px] font-mono bg-[#333333] text-white p-1 rounded">26-Oct-2024 1:12:26 PM</div>
                            </div>
                            <div class="bg-[#1a1a1a] text-white text-center py-1 rounded-lg text-[11px] font-bold tracking-widest uppercase">${img.label}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            ${getReportFooter(4)}
        </div>
    `;
}

function renderPage5() {
    const images = [
        { label: "RIGHT SIDE", seed: "car_side_r" },
        { label: "LEFT SIDE", seed: "car_side_l" },
        { label: "ODO METER", seed: "car_odo" },
        { label: "ENGINE BAY", seed: "car_engine" },
        { label: "VIN PLATE", seed: "car_vin" },
        { label: "CHASSIS NUMBER", seed: "car_chassis_num" }
    ];
    return `
        <div class="report-page">
            <div class="page-content">
                ${getReportHeader(5)}
                <div class="grid grid-cols-2 gap-6 mb-6">
                    ${images.map(img => `
                        <div class="space-y-2">
                            <div class="rounded-lg overflow-hidden border-2 border-[#f5f5f5] aspect-[4/3] relative">
                                <img src="https://picsum.photos/seed/${img.seed}/800/600" alt="${img.label}" class="w-full h-full object-cover" referrerPolicy="no-referrer">
                                <div class="absolute bottom-2 right-2 text-[8px] font-mono bg-[#333333] text-white p-1 rounded">26-Oct-2024 1:12:26 PM</div>
                            </div>
                            <div class="bg-[#1a1a1a] text-white text-center py-1 rounded-lg text-[11px] font-bold tracking-widest uppercase">${img.label}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            ${getReportFooter(5)}
        </div>
    `;
}

function renderPage6() {
    const interiorImages = [
        { label: "INTERIOR FRONT", seed: "car_int_f" },
        { label: "INTERIOR REAR", seed: "car_int_r" }
    ];
    return `
        <div class="report-page">
            <div class="page-content flex flex-col">
                ${getReportHeader(6)}
                <div class="grid grid-cols-2 gap-6 mb-6">
                    ${interiorImages.map(img => `
                        <div class="space-y-2">
                            <div class="rounded-lg overflow-hidden border-2 border-[#f5f5f5] aspect-[4/3] relative">
                                <img src="https://picsum.photos/seed/${img.seed}/800/600" alt="${img.label}" class="w-full h-full object-cover" referrerPolicy="no-referrer">
                                <div class="absolute bottom-2 right-2 text-[6px] font-mono bg-[#333333] text-white p-1 rounded">26-Oct-2024 1:12:26 PM</div>
                            </div>
                            <div class="bg-[#1a1a1a] text-white text-center py-1 rounded-lg text-[9px] font-bold tracking-widest uppercase">${img.label}</div>
                        </div>
                    `).join('')}
                </div>
                <div class="grid grid-cols-4 gap-2 mb-2">
                    ${[1, 2, 3, 4].map(i => `
                        <div class="rounded-lg overflow-hidden border-2 border-[#f5f5f5] aspect-square">
                            <img src="https://picsum.photos/seed/tyre${i}/400/400" alt="Tyre" class="w-full h-full object-cover" referrerPolicy="no-referrer">
                        </div>
                    `).join('')}
                </div>
                <div class="mt-auto bg-slate-50 rounded-lg p-4 border border-[#eef2f6]">
                    <h3 class="text-sm font-black text-[#1a1a1a] uppercase tracking-widest mb-1">DISCLAIMER</h3>
                    <p class="text-[11px] leading-tight text-gray-500 font-medium text-justify">
                        "This Valuation Report is based on a physical, visual inspection of the vehicle carried out on the date of inspection and represents our professional opinion as on that date. The inspection is non-intrusive, and hidden, latent, or intermittent defects may not be identified. We do not verify or authenticate the genuineness of vehicle documents or odometer readings and assume no responsibility thereof. As there is no standard price list for used vehicles, the valuation stated is an estimated market value derived using our standard valuation methodology and prevailing market conditions. Actual realization may vary. This report is issued solely for the use of the addressee and shall not be relied upon by any third party. The company shall not be liable for any direct, indirect, incidental, or consequential losses arising from reliance on this report. This report is issued without prejudice."
                    </p>
                </div>
            </div>
            ${getReportFooter(6)}
        </div>
    `;
}

// --- Main Logic ---

function init() {
    const container = document.getElementById('report-container');
    const headerSubtitle = document.getElementById('header-subtitle');
    
    headerSubtitle.textContent = `${REPORT_DATA.registrationNo} • ${REPORT_DATA.refNo}`;
    
    container.innerHTML = `
        ${renderPage1()}
        ${renderPage2()}
        ${renderPage3()}
        ${renderPage4()}
        ${renderPage5()}
        ${renderPage6()}
    `;
    
    // Initialize Lucide icons
    lucide.createIcons();
}

async function handleDownload() {
    const container = document.getElementById('report-container');
    const downloadBtn = document.getElementById('download-btn');
    const downloadText = document.getElementById('download-text');
    const floatingBtn = document.getElementById('floating-download-btn');
    const floatingText = document.getElementById('floating-download-text');

    if (!container) return;

    const setGenerating = (generating) => {
        downloadBtn.disabled = generating;
        floatingBtn.disabled = generating;
        if (generating) {
            downloadText.textContent = 'Generating...';
            floatingText.textContent = 'Generating...';
        } else {
            downloadText.textContent = 'Direct Download';
            floatingText.textContent = 'Download PDF';
        }
    };

    setGenerating(true);

    try {
        const pages = container.querySelectorAll('.report-page');
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        for (let i = 0; i < pages.length; i++) {
            const page = pages[i];
            
            // Use explicit dimensions to avoid layout shifts during capture
            const dataUrl = await htmlToImage.toPng(page, {
                quality: 1,
                pixelRatio: 2,
                width: 793.7, // 210mm at 96dpi
                height: 1122.5, // 297mm at 96dpi
                backgroundColor: '#ffffff',
                style: {
                    margin: '0',
                    transform: 'none'
                }
            });

            const imgProps = pdf.getImageProperties(dataUrl);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            
            pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
            
            if (i < pages.length - 1) {
                pdf.addPage();
            }
        }

        pdf.save(`VEHGA_Report_${REPORT_DATA.registrationNo}.pdf`);
    } catch (error) {
        console.error('PDF generation failed:', error);
        window.print();
    } finally {
        setGenerating(false);
    }
}

// Run init on load
document.addEventListener('DOMContentLoaded', init);
