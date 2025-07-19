import React from "react";

const Privacy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-8">Effective Date: July 19, 2025</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>DareToTruth Inc. ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and share information when you use the DareToTruth mobile application (“the App”) on iOS or Android.</p>
        <p className="mt-2">By using our App, you agree to this policy and the use of your data as described below.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
        <p>We collect the following types of information from users:</p>
        <h3 className="text-xl font-medium mt-4 mb-1">a. User-Provided Data</h3>
        <ul className="list-disc list-inside ml-6 mb-4">
          <li><strong>Photos:</strong> Uploaded when creating a new exposure (look).</li>
          <li><strong>Captions and Tags:</strong> Descriptions of your appearance.</li>
          <li><strong>Location Data:</strong> Device GPS used to display exposures on the map.</li>
          <li><strong>Ratings and Comments:</strong> Provided when reviewing other users’ looks.</li>
          <li><strong>Chat Messages:</strong> Text content from one-on-one user conversations.</li>
          <li><strong>Profile Information:</strong> Username, profile picture, account metadata.</li>
        </ul>
        <h3 className="text-xl font-medium mt-4 mb-1">b. Automatically Collected Data</h3>
        <ul className="list-disc list-inside ml-6">
          <li><strong>Device Information:</strong> OS version, device type, app version.</li>
          <li><strong>Usage Data:</strong> Timestamps, feature usage, in-app actions.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Data</h2>
        <p>We use your information to:</p>
        <ul className="list-disc list-inside ml-6">
          <li>Enable exposures to appear on a public map based on your real-world location.</li>
          <li>Allow others to rate, like, and comment on your look.</li>
          <li>Generate summary statistics (average score, feedback, achievements).</li>
          <li>Enable private conversations between users via in-app messaging.</li>
          <li>Track your past looks, rating history, and achievements.</li>
          <li>Improve and monitor app performance.</li>
        </ul>
        <p className="mt-2">We do not sell your data or use it for third-party advertising.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Data Storage & Infrastructure</h2>
        <p>We store your data securely using the following services:</p>
        <ul className="list-disc list-inside ml-6 mb-4">
          <li><strong>Amazon S3:</strong> For storing images and media files (exposures, profile pictures).</li>
          <li><strong>MongoDB Atlas:</strong> For structured storage of all user data, including:
            <ul className="list-disc list-inside ml-6">
              <li>Exposure records</li>
              <li>Rating records</li>
              <li>Achievement and badge progress</li>
              <li>Chat message logs</li>
            </ul>
          </li>
        </ul>
        <p>We apply industry-standard safeguards to secure these services, including access control, encryption, and regular backups.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Third-Party Services</h2>
        <p>In addition to storage providers, we use:</p>
        <ul className="list-disc list-inside ml-6">
          <li>Apple Maps (iOS) and Google Maps (Android) for map functionality.</li>
          <li>Expo & React Native libraries for mobile app delivery and analytics.</li>
        </ul>
        <p className="mt-2">These services may collect limited technical data, as governed by their own privacy policies.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Your Rights & Controls</h2>
        <p>You can control your data in the following ways:</p>
        <ul className="list-disc list-inside ml-6">
          <li>Delete exposures from your past looks history.</li>
          <li>Hide or unhide exposures in your profile.</li>
          <li>Request full account deletion, including all associated content and metadata.</li>
          <li>Control app permissions (e.g. GPS, camera access) via your device settings.</li>
        </ul>
        <p className="mt-2">For account deletion or data access requests, contact us at <a href="mailto:info@daretotruth.ca" className="text-blue-600">info@daretotruth.ca</a>.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Data Retention</h2>
        <p>Exposure posts automatically expire after a set period (e.g., 24 hours).</p>
        <p className="mt-2">Past looks, ratings, messages, and profile data are stored until manually deleted by the user or upon account deletion.</p>
        <p className="mt-2">We retain logs for legal and audit purposes where necessary.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">8. Children’s Privacy</h2>
        <p>Our app is not intended for users under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware of such data, we will delete it promptly.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">9. Changes to This Policy</h2>
        <p>We may update this policy from time to time. Changes will be posted on our website and within the app. Continued use after changes are published means you accept the new terms.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">10. Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy or your personal data, please contact:</p>
        <ul className="list-disc list-inside ml-6">
          <li>📧 <a href="mailto:info@daretotruth.ca" className="text-blue-600">info@daretotruth.ca</a></li>
          <li>🌐 <a href="https://www.daretotruth.ca" className="text-blue-600">www.daretotruth.ca</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Privacy; 