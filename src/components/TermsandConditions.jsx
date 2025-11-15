import React from "react";

function TermsandConditions() {
    return (
        <div className="flex justify-center items-center ">
            <div className="p-4">
            <h4 className="text-xl font-semibold text-white mb-4">Terms & Conditions</h4>

            <p className="text-sm text-gray-400 mb-4">
                <strong>Last Updated: November 2025</strong>
            </p>

            <p className="text-sm text-gray-400 mb-4">
                By accessing or using <strong>ukesportshub.in</strong> ("Website"), you agree to the following Terms and Conditions. 
                If you do not agree, stop using the Website immediately.
            </p>

            {/* 1. Eligibility */}
            <h2 className="text-md font-semibold text-white mt-4">1. Eligibility</h2>
            <ul className="list-disc ml-6 text-sm text-gray-400">
                <li>You must be at least 13 years old to use the platform.</li>
                <li>Participation in tournaments may require additional age verification.</li>
                <li>If you register on behalf of a team or organization, you confirm you have the authority to do so.</li>
            </ul>

            {/* 2. Account Registration */}
            <h2 className="text-md font-semibold text-white mt-4">2. Account Registration</h2>
            <ul className="list-disc ml-6 text-sm text-gray-400">
                <li>All information you submit must be accurate and updated.</li>
                <li>You are responsible for your login credentials and activity under your account.</li>
                <li>We may suspend or delete accounts involved in fraud, misconduct, or violating these terms.</li>
            </ul>

            {/* 3. Tournament Participation */}
            <h2 className="text-md font-semibold text-white mt-4">3. Tournament Participation</h2>
            <ul className="list-disc ml-6 text-sm text-gray-400">
                <li>All event rules, eligibility criteria, and prize details may change anytime.</li>
                <li>Cheating, hacking, match-fixing, or unauthorized tools lead to instant disqualification.</li>
                <li>Decisions by UKEsportsHub admins, referees, or organizers are final.</li>
            </ul>

            {/* 4. Payments & Refunds */}
            <h2 className="text-md font-semibold text-white mt-4">4. Payments & Refunds</h2>
            <ul className="list-disc ml-6 text-sm text-gray-400">
                <li>All registration fees must be paid through official methods.</li>
                <li>Refunds are not guaranteed and only provided in exceptional cases at our discretion.</li>
                <li>Chargebacks or fraudulent activity may result in permanent bans.</li>
            </ul>

            {/* 5. Content & Intellectual Property */}
            <h2 className="text-md font-semibold text-white mt-4">5. Content & Intellectual Property</h2>
            <ul className="list-disc ml-6 text-sm text-gray-400">
                <li>All logos, graphics, texts, and media are owned by ukesportshub.in . </li>
                <li>You may not copy, modify, or distribute any content without written permission.</li>
                <li>By participating, you allow us to use your photos, gameplay, and team/player names for promotions.</li>
            </ul>

            {/* 6. User Conduct */}
            <h2 className="text-md font-semibold text-white mt-4">6. User Conduct</h2>
            <ul className="list-disc ml-6 text-sm text-gray-400">
                <li>Do not submit false information.</li>
                <li>No harassment, threats, or abuse towards players or staff.</li>
                <li>No toxic behavior or hate speech.</li>
                <li>No malicious files, hacking attempts, or disruption.</li>
                <li>Violations may lead to bans, disqualification, or legal action.</li>
            </ul>

            {/* 7. Data Privacy */}
            <h2 className="text-md font-semibold text-white mt-4">7. Data Privacy</h2>
            <ul className="list-disc ml-6 text-sm text-gray-400">
                <li>We collect only the data required for event management.</li>
                <li>We do NOT sell your personal data.</li>
                <li>Data may be shared with event partners for event purposes only.</li>
                <li>Refer to our Privacy Policy for detailed info.</li>
            </ul>

            {/* 8. Limitation of Liability */}
            <h2 className="text-md font-semibold text-white mt-4">8. Limitation of Liability</h2>
            <ul className="list-disc ml-6 text-sm text-gray-400">
                <li>We are not responsible for server issues or third-party failures.</li>
                <li>We are not liable for losses, damages, or injuries during events.</li>
                <li>Participation is voluntary and at your own risk.</li>
            </ul>

            {/* 9. Third-Party Links */}
            <h2 className="text-md font-semibold text-white mt-4">9. Third-Party Links</h2>
            <ul className="list-disc ml-6 text-sm text-gray-400">
                <li>The Website may include third-party links.</li>
                <li>We are not responsible for their safety, content, or policies.</li>
            </ul>

            {/* 10. Modification of Terms */}
            <h2 className="text-md font-semibold text-white mt-4">10. Modification of Terms</h2>
            <ul className="list-disc ml-6 text-sm text-gray-400">
                <li>We may update these Terms anytime without notice.</li>
                <li>Continued use means you accept the updated Terms.</li>
            </ul>

            {/* 11. Contact Info */}
            <h2 className="text-md font-semibold text-white mt-4">11. Contact Information</h2>
            <p className="text-sm text-gray-400 ml-1">
                Email: support@ukesportshub.in <br />
                Instagram: @ukesportshub <br />
                Website: ukesportshub.in
            </p>

            <p className="text-sm text-gray-400 mt-4">
                By continuing to use ukesportshub.in, you agree to follow all the rules above.
            </p>
        </div>
        </div>
    );
}

export default TermsandConditions;
