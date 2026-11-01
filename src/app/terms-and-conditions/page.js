import React from 'react';

export const metadata = {
  title: 'Terms & Conditions',
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsAndConditions() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-32 pb-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-2">Terms & Conditions</h1>

      <div className="space-y-6 leading-relaxed">
        <p className="font-semibold text-lg">
          Skilled Plumbing Services Pty Ltd &middot; ABN 30 700 290 633
        </p>
        <p>
          Plumbing Contractor Licence PL11063 &middot; Gas Fitting Licence GF20308
          <br />
          Last updated: 1 November 2026
        </p>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Definitions</h2>
          <p className="mb-4">In these terms:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>&ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;SPS&rdquo;</strong> means Skilled Plumbing Services Pty Ltd (ABN 30 700 290 633) and anyone we engage to carry out the work for us.</li>
            <li><strong>&ldquo;you&rdquo; or &ldquo;the customer&rdquo;</strong> means the person, business or organisation who accepts our quote or asks us to do work.</li>
            <li><strong>&ldquo;quote&rdquo;</strong> means our written quote or proposal, including any proposal sent through ServiceM8.</li>
            <li><strong>&ldquo;work&rdquo;</strong> means the plumbing, gas fitting, drainage and related services we carry out for you, together with any materials we supply.</li>
            <li><strong>&ldquo;site&rdquo;</strong> means the property where the work is carried out.</li>
            <li><strong>&ldquo;variation&rdquo;</strong> means any change to the work described in the quote.</li>
            <li><strong>&ldquo;in writing&rdquo;</strong> includes email, SMS and online acceptance or signature through our job management system.</li>
          </ul>
          <p className="mt-4">
            Headings are for convenience only. Examples introduced by words like &ldquo;including&rdquo; or &ldquo;for example&rdquo; don&rsquo;t limit the general words before them. A reference to a law includes that law as amended or replaced.
          </p>
          <p className="mt-4">
            These terms have two parts. Part A applies to every job. Part B adds conditions for particular kinds of work and applies only when we do that kind of work for you.
          </p>
        </section>

        <h2 className="text-3xl font-bold mt-12 mb-2">Part A &mdash; General terms</h2>

        <section>
          <h3 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of quote</h3>
          <p className="mb-4">
            Skilled Plumbing Services Pty Ltd (ABN 30 700 290 633) (&ldquo;we&rdquo;, &ldquo;us&rdquo;) provides plumbing and gas fitting services on these terms. You (&ldquo;the customer&rdquo;) accept these terms when you accept our quote in writing, online, by signing, by paying the deposit, or by asking us to start work.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The quote, these terms and any written variations form the whole agreement between us.</li>
            <li>If the person accepting the quote is not the property owner, they confirm they have the owner&rsquo;s authority to engage us and agree to be responsible for payment.</li>
            <li>If more than one person or entity accepts the quote, each of you is responsible for the full amount owing, not just a share of it.</li>
            <li>By accepting the quote, you confirm that you have the authority to enter into this agreement and, if you are accepting for a business, that you are authorised to do so on its behalf.</li>
            <li>If your purchase order or other document contains terms that conflict with these terms, these terms apply unless we agree otherwise in writing.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mt-8 mb-4">2. Quote validity and pricing</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Our quote is valid for 30 days from the date issued. After that, we may re-quote if material prices or the scope have changed.</li>
            <li>Prices include GST unless stated otherwise.</li>
            <li>The quote covers only the work and materials listed. Anything not listed is excluded &mdash; for example making good of tiles, plaster, paving or cabinetry, unless the quote says otherwise.</li>
            <li>The quote is based on the information you gave us and what we could reasonably see at the time of quoting. Section 5 explains what happens if conditions turn out to be different.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mt-8 mb-4">3. Deposits and payment</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>For jobs over $200, we may ask for a deposit of 30% of the quoted price before we order materials or book the work. For home building work covered by the Home Building Contracts Act 1991 (WA), the deposit will not exceed 6.5%.</li>
            <li>For larger jobs we may invoice progress payments at the stages set out in the quote. Each progress payment will reflect work actually done.</li>
            <li>Unless the quote says otherwise, invoices are due on completion for residential customers and 7 days for commercial customers. Payment terms are outlined at the bottom of each invoice.</li>
            <li>If an invoice is overdue, we will send 3 payment reminders via email &amp; SMS at day 1, 3 and 9 post due date. If it remains unpaid 30 days after the due date, we may charge interest at 12% per year, calculated daily, on the overdue amount and recover reasonable debt collection costs.</li>
            <li>We accept bank transfer and card.</li>
            <li>If a deposit, progress payment or overdue invoice is not paid within 7 days after we notify you in writing, we may pause work until it is paid. We will tell you before we do, and any resulting delay will not be our responsibility.</li>
            <li>If you dispute part of an invoice, please tell us in writing within 7 days of receiving it and pay the undisputed amount by the due date while we work it out.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mt-8 mb-4">4. Variations and additional work</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Any change to the quoted work &mdash; whether you request it or it is needed because of something we find &mdash; is a variation.</li>
            <li>Before doing a variation, we will tell you what it involves and its cost or how it will be charged (fixed price or hourly rate plus materials). We will get your approval in writing before continuing the work &mdash; email, SMS or signed on our app is fine.</li>
            <li>We won&rsquo;t charge for a variation you have not approved, except urgent work needed to make the site safe or stop water or gas leaking. We will tell you about that work as soon as possible.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mt-8 mb-4">5. Hidden conditions and existing plumbing</h3>
          <p className="mb-4">
            Plumbing is often behind walls, under floors and underground, so some problems can&rsquo;t be seen until work starts.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>If we find conditions we could not reasonably have foreseen when quoting &mdash; for example root intrusion, collapsed or non-compliant pipes, asbestos, rock, or concealed services &mdash; we will stop, explain what we found and give you options and costs before going further. Extra work is handled as a variation under section 4.</li>
            <li>Older pipes, fittings and fixtures can fail when disturbed or when water pressure is restored. We take care, but we are not responsible for failures of existing components that were already deteriorated, unless our work caused the damage through lack of due care.</li>
            <li>If we find asbestos-containing material, we will stop work in that area. Removal must be done by a licensed asbestos removalist at your cost.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mt-8 mb-4">6. Customer responsibilities and site access</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>You agree to give us safe, clear access to the work area at the agreed time, including water, power and somewhere to park.</li>
            <li>Please secure pets and remove valuables, furniture and fragile items from the work area. If you can&rsquo;t, let us know beforehand.</li>
            <li>Tell us about any known hazards, asbestos, underground services or previous plumbing problems before we start.</li>
            <li>If we arrive at the booked time and can&rsquo;t access the site or start work for reasons outside our control, we may charge a call-out fee of $220 (GST inc). We will tell you this fee when booking.</li>
            <li>You must let us know before work starts about any site safety rules, security arrangements or hazards we should be aware of.</li>
            <li>We may refuse to start, or stop, any work that we reasonably believe would put people or property at risk, until the risk is dealt with. If that happens we will explain why and what is needed to continue.</li>
            <li>Where our vehicle, trailer or equipment needs to come onto the site, you must provide reasonable and safe access for it. We are not responsible for damage to driveways, kerbs or paths from normal vehicle access, unless we failed to take reasonable care.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mt-8 mb-4">7. Customer-supplied materials</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>If you supply fixtures or fittings (for example tapware, toilets, vanities or a hot water unit), they must be WaterMark certified where required, suitable for the job and on site when we arrive.</li>
            <li>We warrant our installation workmanship, but not the product itself. Any product fault is a matter for you and the supplier or manufacturer.</li>
            <li>If customer-supplied items are missing parts, damaged or unsuitable, extra time to source or fix them is charged as a variation.</li>
            <li>Unless we have quoted for them, we assume customer-supplied basins, sinks and tubs come complete with their plug and waste, and that toilets and tapware come with all fittings needed for installation.</li>
            <li>If a customer-supplied item fails and we have to return to remove, reinstall or replace it, that return visit is charged at our standard rates.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mt-8 mb-4">8. Scheduling, delays, cancellation and termination</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>We will give you a start date and an estimated duration. These are estimates, and we will keep you updated if they change.</li>
            <li>We are not responsible for delays outside our reasonable control, such as severe weather, supplier shortages, emergencies, or delays by other trades or approvals.</li>
            <li>You may cancel or reschedule by giving us at least 72 hours&rsquo; notice. If you cancel after acceptance, we will refund your deposit less the cost of any materials already ordered that can&rsquo;t be returned, restocking fees and work already done.</li>
            <li>If we need to cancel, we will rebook you as soon as possible or refund any deposit in full.</li>
            <li>If you change your mind about a product after we have ordered it, any restocking or handling fee our supplier charges us will be passed on to you at cost. Special-order, custom-made or cut-to-size items usually can&rsquo;t be returned, so they will be charged in full.</li>
            <li>Either of us may end the agreement by written notice if the other seriously breaches these terms and doesn&rsquo;t fix the breach within 7 days of being asked in writing. We may also end it by written notice if you become insolvent or bankrupt.</li>
            <li>If the agreement ends for any reason, you must pay for work completed and materials supplied or ordered up to that point, less any deposit already paid. Ending the agreement does not affect rights either of us already had at that time.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mt-8 mb-4">9. Ownership of materials</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Materials we supply remain our property until the invoice for them is paid in full. Once installed, ownership passes to you on full payment.</li>
            <li>Materials ordered specially for your job that are not yet installed remain our property if the job is cancelled, unless you have paid for them.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mt-8 mb-4">10. Warranty and consumer guarantees</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>We guarantee our workmanship for 12 months from completion. If our work is faulty in that time, we will fix it at no cost to you.</li>
            <li>Products we supply carry the manufacturer&rsquo;s warranty, and we will help you make a claim.</li>
            <li>Our workmanship warranty doesn&rsquo;t cover faults caused by misuse, accidental damage, blockages from foreign objects, tree roots entering after completion, water quality, work by others, or customer-supplied products.</li>
            <li><strong>Australian Consumer Law.</strong> Our services come with guarantees that cannot be excluded under the Australian Consumer Law. For major failures with the service, you are entitled to cancel your service contract with us and to a refund for the unused portion, or to compensation for its reduced value. You are also entitled to be compensated for any other reasonably foreseeable loss or damage. If the failure does not amount to a major failure, you are entitled to have problems with the service rectified in a reasonable time and, if this is not done, to cancel your contract and obtain a refund for the unused portion of the contract.</li>
            <li>Nothing in these terms limits any right you have under the Australian Consumer Law or any other law that can&rsquo;t be excluded.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mt-8 mb-4">11. Compliance, licensing and certificates</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>All plumbing and gas work is carried out by licensed tradespeople (Plumbing Contractor Licence PL11063; Gas Fitting Licence GF20308) and to the Plumbers Licensing and Plumbing Standards Regulations 2000 (WA), AS/NZS 3500 and other applicable standards.</li>
            <li>We lodge any required notices and issue certificates of compliance or gas certificates for notifiable work. Certificates are issued once the work is complete.</li>
            <li>If council, Water Corporation or other approvals are needed, the quote will say who arranges them. Fees for approvals are charged at cost unless included in the quote.</li>
            <li>We will not carry out work that doesn&rsquo;t comply with regulations, even at your request.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mt-8 mb-4">12. Liability</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>We hold public liability insurance of $20 million. A certificate of currency is available on request.</li>
            <li>We are responsible for loss or damage caused by our failure to take due care and skill, and for anything else the Australian Consumer Law makes us responsible for.</li>
            <li>We are not responsible for loss or damage caused by pre-existing defects (see section 5), customer-supplied products, work by others, or anything outside our reasonable control, except where the law says otherwise.</li>
            <li>Please tell us about any damage or problem you believe we caused as soon as you notice it, ideally while we are still on site, so we can inspect and fix it quickly. Reporting late does not remove your rights, but it can make the cause harder to establish.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mt-8 mb-4">13. Disputes, privacy and general</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>If you&rsquo;re unhappy with our work, please contact us first on 0448 803 947 or <a href="mailto:ren@skilledplumbingservices.com" className="text-blue-600 hover:underline">ren@skilledplumbingservices.com</a> so we can rectify any concern or query. We&rsquo;ll respond within 5 business days.</li>
            <li>If we can&rsquo;t resolve it together, either of us may contact Building and Energy (1300 489 099) or Consumer Protection WA for help, or use any other dispute process available under law.</li>
            <li>We collect your contact and job details only to deliver our services, invoice you and keep required compliance records. We won&rsquo;t sell your information. With your consent we may photograph completed work for our records and marketing, without showing your address or personal details.</li>
            <li>We may update these terms from time to time. The version current on the date you accept our quote applies to that job.</li>
            <li>These terms are governed by the laws of Western Australia.</li>
            <li>We may send notices, quotes and invoices by email or SMS to the contact details you give us. They are treated as received on the day they are sent, or the next business day if sent after 5pm.</li>
            <li>If any part of these terms is found to be invalid or unenforceable, it will be read down or removed to the minimum extent needed, and the rest of the terms continue to apply.</li>
            <li>If we don&rsquo;t enforce a right straight away, that doesn&rsquo;t mean we have given it up.</li>
            <li>You may not transfer your rights or obligations under this agreement to anyone else without our written consent.</li>
            <li>Neither of us is responsible for failing to meet an obligation (other than paying money) because of events beyond reasonable control, such as extreme weather, fire, flood, pandemic, industrial action or a utility outage.</li>
          </ul>
        </section>

        <h2 className="text-3xl font-bold mt-12 mb-2">Part B &mdash; Conditions for specific work</h2>

        <section>
          <h3 className="text-2xl font-semibold mt-8 mb-4">14. Hot water systems</h3>
          <p className="mb-4">Unless the quote says otherwise, our hot water prices assume that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>the existing water, gas and electrical supply is the right size for the new unit and complies with current standards;</li>
            <li>the existing gas pipework is gas-tight and delivers the pressure the new unit needs;</li>
            <li>the new unit fits in the same position as the old one, on a sound base, with clear access;</li>
            <li>no additional valves (such as a tempering valve, isolation valve or pressure-limiting valve) are needed beyond those listed in the quote.</li>
          </ul>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Current standards may require us to fit items your old system didn&rsquo;t have, such as a tempering valve, gas isolation valve or new drain line. If they are not in the quote, we will tell you and charge them as a variation. These items are legal requirements, not optional extras.</li>
            <li>Removal and disposal of your old unit is included only if the quote says so.</li>
            <li>If your existing unit may still be under the manufacturer&rsquo;s warranty, please check with the manufacturer before engaging us. Warranty claims on units we did not install are between you and the manufacturer. We are happy to quote for labour to install a warranty replacement.</li>
            <li>Where we install a temporary hot water unit while a permanent replacement is arranged, the temporary unit remains our property. You agree to take reasonable care of it and let us remove it when the permanent unit is installed. Any hire charge will be stated in the quote.</li>
            <li>Where the quoted price includes a discount for small-scale technology certificates (STCs) or another rebate, you agree to assign those certificates or rebates to us and to sign the forms needed to do so. If you don&rsquo;t, we may invoice you for the value of the discount you received.</li>
            <li>Call-outs to relight a pilot light, reset a unit, or investigate a fault that turns out to be a supply outage or user setting are charged at our standard call-out rate.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mt-8 mb-4">15. Gas fitting</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Our gas quotes assume the existing gas installation is gas-tight and correctly sized. Finding or repairing leaks on pipework we are not working on is not included unless the quote says so.</li>
            <li>By law, we cannot leave a gas installation in an unsafe condition. If we find a leak, undersized pipework or another defect that makes the installation unsafe, we will isolate the supply, explain what we found and quote to fix it. The supply may need to stay off until the defect is repaired.</li>
            <li>If the gas meter or supply needs upgrading, your gas distributor or retailer may charge you separately for that work. Those charges are not ours and are outside our control, so please check them before accepting our quote.</li>
            <li>All appliances we connect must have a working isolation valve. If one is missing it will be added, and charged as a variation if not already quoted.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mt-8 mb-4">16. Blocked drains, CCTV inspections and drainage</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>When we clear a blockage, we restore flow at that time. We can&rsquo;t guarantee the drain won&rsquo;t block again, especially where pipes are cracked, displaced, sagging or have tree roots growing into them. We will tell you if we see signs of an ongoing problem and recommend a CCTV inspection or repair.</li>
            <li>A CCTV drain inspection shows the condition of the pipes we can reach with the camera on the day of the inspection. Some sections may not be visible due to bends, water, debris or access. The footage and our report are our honest opinion of what we saw, not a guarantee of the drain&rsquo;s future condition.</li>
            <li>Our workmanship warranty covers new drainage we install. It does not cover existing drainage we have not replaced, unless the quote says so.</li>
            <li>Unless the quote says so, removing old clay, earthenware or PVC pipes from site is not included.</li>
            <li>If a blockage was caused by items that shouldn&rsquo;t be in the drain (for example wipes, sanitary products, grease, building waste or children&rsquo;s toys), the call-out is chargeable even if the drain was installed by us.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mt-8 mb-4">17. Excavation, concrete and underground services</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Unless the quote says otherwise, our prices for digging assume normal soil that can be dug by hand with a shovel, above the water table. Digging through rock, limestone, heavy roots, rubble or old footings, or work that needs dewatering, machinery or extra labour, will be charged as a variation at our standard rates, plus any equipment hire.</li>
            <li>Our prices for cutting or breaking concrete assume a standard slab no more than 100&nbsp;mm thick with standard mesh reinforcement. Thicker or heavily reinforced concrete may need commercial cutting equipment, which will be charged as a variation, along with disposal of extra concrete and fill.</li>
            <li>We request Before You Dig Australia information before excavating and take care to avoid underground services. We are not responsible for damage to services that are not shown on those plans, are not where the plans show them, or were not installed at the minimum depth required by standards. If repairs to such services are needed, they will be charged to you.</li>
            <li>Please tell us about any private services you know of, such as reticulation pipes and wiring, garden lighting, solar or pool cabling, or septic and leach drains. We will take reasonable care to avoid them.</li>
            <li>We will backfill trenches and leave the area tidy. Unless the quote says otherwise, the price does not include reinstating paving, concrete, lawn, garden beds, plants or reticulation. We are responsible for damage only where we failed to take reasonable care.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mt-8 mb-4">18. Toilets, tapware and fixture replacement</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Unless they are listed in the quote, replacing flexible hoses, stop taps, cover plates or pan connectors is not included. We will recommend replacing them if they are worn.</li>
            <li>Some older toilets, basins and baths are fixed with cement or mortar, and removing them can crack surrounding tiles, screed or flooring. If we see this risk, we will tell you before removal. If you ask us to go ahead, repairs to tiles, grout or flooring damaged as a result are not included in the price, unless we failed to take reasonable care.</li>
            <li>Old taps, valves and isolation cocks can seize or break when operated. If replacing them becomes necessary, we will tell you and charge it as a variation.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mt-8 mb-4">19. Water filtration</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Filter performance depends on your incoming water quality. We will recommend a system based on the information available, but we can&rsquo;t guarantee a specific water quality result unless the quote states one.</li>
            <li>Filter cartridges are consumables. Replacing them at the intervals the manufacturer recommends is your responsibility, and our warranty doesn&rsquo;t cover problems caused by overdue cartridge changes.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mt-8 mb-4">20. Renovations, extensions and new work</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Where the work is home building work covered by the Home Building Contracts Act 1991 (WA), we will provide a separate written contract and the Notice for the Home Owner as that Act requires. That contract takes priority over these terms where they conflict.</li>
            <li>Our quotes are based on the plans and selections available when we quote. Changes to the layout, fixture selections or finished levels after that are variations.</li>
            <li>You must make sure the site is ready for each stage of our work, including frames, set-downs and wet-area preparation by other trades. Extra visits caused by the site not being ready are charged at our standard rates.</li>
            <li>Unless the quote says otherwise, obtaining development or building approvals, and providing plans to the standard required by the local government, are your responsibility. We will advise you on plumbing-related approvals and, where quoted, prepare and submit them. Approval is granted by the authority, so we can&rsquo;t guarantee it, and additional drawings, reports or fees they require will be charged as a variation.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mt-8 mb-4">21. Subcontractors and electrical work</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>We may engage licensed and insured subcontractors for parts of the work, such as electrical connections, leak detection, concrete cutting, excavation or specialist drain repairs. We remain responsible to you for work we arrange.</li>
            <li>Where subcontracted work is not included in the quote, we will tell you the expected cost or the subcontractor&rsquo;s rates before they attend. Their charges are passed on to you plus a 10% coordination fee.</li>
            <li>Where an electrician connects an appliance or adds a power point for our work, the price assumes your existing wiring and switchboard are safe, RCD-protected and compliant. Any electrical upgrades the electrician finds are needed will be quoted and charged separately.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
