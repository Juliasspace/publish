'use client';

import { motion } from 'framer-motion';

export default function ImpressumPage() {
  return (
    <div className="min-h-screen">
      <section className="section bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h1 className="text-4xl font-semibold text-gray-900 mb-8">Impressum</h1>
            
            <div className="space-y-8 text-gray-700">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
                <div className="space-y-2">
                  <p><strong>Julia Osterloh</strong></p>
                  <p>Freiberufliche Designerin & Entwicklerin</p>
                  <p>Musterstraße 123</p>
                  <p>80331 München</p>
                  <p>Deutschland</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontakt</h2>
                <div className="space-y-2">
                  <p>Telefon: +49 (0) 123 456 789</p>
                  <p>E-Mail: hallo@juliaosterloh.de</p>
                  <p>Website: www.juliaosterloh.de</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Umsatzsteuer-ID</h2>
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                <p>DE123456789</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <div className="space-y-2">
                  <p>Julia Osterloh</p>
                  <p>Musterstraße 123</p>
                  <p>80331 München</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                <p>Die Berufsbezeichnung &ldquo;Designerin&rdquo; wurde in Deutschland verliehen.</p>
                <p>Zuständige Kammer: Handwerkskammer für München und Oberbayern</p>
                <p>Es gelten folgende berufsrechtliche Regelungen:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Handwerksordnung (HwO)</li>
                  <li>Gewerbeordnung (GewO)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Redaktionell verantwortlich</h2>
                <p>Julia Osterloh</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">EU-Streitschlichtung</h2>
                <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" className="text-accent hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
                <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Haftungsausschluss (Disclaimer)</h3>
                <div className="space-y-4 text-yellow-700">
                  <div>
                    <h4 className="font-semibold">Haftung für Inhalte</h4>
                    <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Haftung für Links</h4>
                    <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Urheberrecht</h4>
                    <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
                  </div>
                </div>
              </div>

              <div className="text-sm text-gray-500 mt-8">
                <p><strong>Hinweis:</strong> Dieses Impressum dient als Platzhalter und muss vor der Veröffentlichung der Website durch rechtlich gültige Inhalte ersetzt werden. Bitte konsultieren Sie einen Anwalt für die Erstellung eines rechtskonformen Impressums.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
