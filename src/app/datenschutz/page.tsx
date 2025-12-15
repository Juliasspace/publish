'use client';

import { motion } from 'framer-motion';

export default function DatenschutzPage() {
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
            <h1 className="text-4xl font-semibold text-gray-900 mb-8">Datenschutzerklärung</h1>
            
            <div className="space-y-8 text-gray-700">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Allgemeine Hinweise</h3>
                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Datenerfassung auf dieser Website</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
                <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt &ldquo;Hinweis zur Verantwortlichen Stelle&rdquo; in dieser Datenschutzerklärung entnehmen.</p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Wie erfassen wir Ihre Daten?</h3>
                <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
                <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Hosting</h2>
                <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Vercel Inc.</strong></p>
                  <p>340 S Lemon Ave #4133</p>
                  <p>Walnut, CA 91789</p>
                  <p>USA</p>
                </div>
                <p>Die Erfassung und Verarbeitung Ihrer Daten erfolgt ausschließlich in der EU und wird streng nach den Bestimmungen der DSGVO durchgeführt.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Allgemeine Hinweise und Pflichtinformationen</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Datenschutz</h3>
                <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
                <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Julia Osterloh</p>
                  <p>Musterstraße 123</p>
                  <p>80331 München</p>
                  <p>Deutschland</p>
                  <p>E-Mail: hallo@juliaosterloh.de</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Datenerfassung auf dieser Website</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Kontaktformular</h3>
                <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
                <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Newsletter</h2>
                <p>Diese Website bietet keinen Newsletter-Service an. Falls in Zukunft ein Newsletter angeboten wird, werden Sie hierüber informiert und können entsprechend der DSGVO zustimmen oder widersprechen.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Plugins und Tools</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Google Fonts (lokales Hosting)</h3>
                <p>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.</p>
                <p>Weitere Informationen zu Google Fonts finden Sie unter <a href="https://developers.google.com/fonts/faq" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://developers.google.com/fonts/faq</a> und in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. eRecht24 Safe Sharing</h2>
                <p>Diese Datenschutzerklärung wurde mit dem Datenschutzerklärungs-Generator der eRecht24 erstellt.</p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Wichtiger Hinweis</h3>
                <p className="text-yellow-700">Diese Datenschutzerklärung dient als Platzhalter und muss vor der Veröffentlichung der Website durch rechtlich gültige Inhalte ersetzt werden. Bitte konsultieren Sie einen Datenschutzexperten oder Anwalt für die Erstellung einer rechtskonformen Datenschutzerklärung, die speziell auf Ihre Website und deren Funktionen zugeschnitten ist.</p>
              </div>

              <div className="text-sm text-gray-500 mt-8">
                <p><strong>Stand:</strong> {new Date().toLocaleDateString('de-DE')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
