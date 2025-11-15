import React from "react";

function PrivacyandPolicies() {
    return (
        <div className="display: flex justify-center items-center ">
            <div className="p-4">
            <h1 className="text-xl font-semibold text-white mb-4">Privacy Policy</h1>

            <p className="text-sm text-gray-400 mb-4">
                <strong>Last Updated: November 2025</strong>
            </p>

            <p className="text-sm text-gray-400 mb-4">
                This Privacy Policy explains how <strong>ukesportshu.in</strong> (“we”, “our”, “us”) 
                collects, uses, stores, and protects your information. By using the Website, 
                you agree to this policy.
            </p>

            {/* 1. Information We Collect */}
            <h2 className="text-md font-semibold text-white mt-4">1. Information We Collect</h2>
            <h3 className="text-sm font-semibold text-gray-300 mt-2">A. Information You Provide Directly</h3>
            <ul className="list-disc ml-6 text-sm text-gray-400">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Team and player information</li>
                <li>Tournament registration details</li>
                <li>Payment info (handled by third-party gateways)</li>
            </ul>

            <h3 className="text-sm font-semibold text-gray-300 mt-2">B. Information Collected Automatically</h3>
            <ul className="list-disc ml-6 text-sm text-gray-400">
                <li>IP address</li>
                <li>Device and browser details</li>
                <li>Website usage & analytics</li>
            </ul>

            <h3 className="text-sm font-semibold text-gray-300 mt-2">C. Third-Party Data</h3>
            <ul className="list-disc ml-6 text-sm text-gray-400">
                <li>Basic profile info if you log in through Google/Instagram or similar services.</li>
            </ul>

            {/* 2. How We Use Your Information */}
            <h2 className="text-md font-semibold text-white mt-4">2. How We Use Your Information</h2>
            <ul className="list-disc ml-6 text-sm text-gray-400">
                <li>Manage tournament registrations</li>
                <li>Verify identity and eligibility</li>
                <li>Send updates, schedules, and event information</li>
                <li>Improve website performance</li>
                <li>Prevent fraud, abuse, and cheating</li>
                <li>Handle payments and refunds</li>
                <li>Create leaderboards and event content</li>
                <li>Use gameplay clips, team names, or photos for promotions (non-sensitive)</li>
            </ul>

            {/* 3. Sharing Your Information */}
            <h2 className="text-md font-semibold text-white mt-4">3. Sharing Your Information</h2>
            <p className="text-sm text-gray-400 ml-1 mb-2">We do <strong>NOT</strong> sell your data.</p>
            <ul className="list-disc ml-6 text-sm text-gray-400">
                <li>Tournament partners</li>
                <li>Payment gateways (Razorpay, Paytm, etc.)</li>
                <li>Analytics & security tools</li>
                <li>Legal authorities (only when required)</li>
            </ul>

            {/* 4. Cookies */}
            <h2 className="text-md font-semibold text-white mt-4">4. Cookies & Tracking</h2>
            <ul className="list-disc ml-6 text-sm text-gray-400">
                <li>Session/login management</li>
                <li>Analytics</li>
                <li>Fraud prevention</li>
                <li>User experience improvements</li>
            </ul>

            {/* 5. Data Protection */}
            <h2 className="text-md font-semibold text-white mt-4">5. Data Protection & Security</h2>
            <ul className="list-disc ml-6 text-sm text-gray-400">
                <li>Encrypted communication (HTTPS)</li>
                <li>Secure storage</li>
                <li>Strict access control</li>
                <li>Anti-fraud monitoring</li>
            </ul>

            {/* 6. Rights */}
            <h2 className="text-md font-semibold text-white mt-4">6. Your Rights</h2>
            <ul className="list-disc ml-6 text-sm text-gray-400">
                <li>Request access to your data</li>
                <li>Request corrections</li>
                <li>Request deletion (unless legally restricted)</li>
                <li>Opt-out of promotional communication</li>
            </ul>

            {/* 7. Data Retention */}
            <h2 className="text-md font-semibold text-white mt-4">7. Data Retention</h2>
            <p className="text-sm text-gray-400 ml-1">
                We keep your data only as long as necessary for events, legal compliance, or operations. 
                Then it is deleted or anonymized.
            </p>

            {/* 8. Children's Privacy */}
            <h2 className="text-md font-semibold text-white mt-4">8. Children’s Privacy</h2>
            <p className="text-sm text-gray-400 ml-1">
                Users under <strong>13 years</strong> are not allowed. Accounts found to be underage will be removed.
            </p>

            {/* 9. Third-Party Links */}
            <h2 className="text-md font-semibold text-white mt-4">9. Third-Party Links</h2>
            <p className="text-sm text-gray-400 ml-1">
                We are not responsible for external websites or their privacy practices.
            </p>

            {/* 10. Changes to Policy */}
            <h2 className="text-md font-semibold text-white mt-4">10. Changes to This Policy</h2>
            <p className="text-sm text-gray-400 ml-1">
                We may update this Privacy Policy at any time. Continued use means you accept the changes.
            </p>

            {/* 11. Contact Info */}
            <h2 className="text-md font-semibold text-white mt-4">11. Contact Information</h2>
            <p className="text-sm text-gray-400 ml-1">
                Email: support@ukesportshub.in <br />
                Instagram: @ukesportshub <br />
                Website: ukesportshub.in
            </p>
        </div>
        </div>
    );
}

export default PrivacyandPolicies;
