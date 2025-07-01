export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Welcome to Scrapr 👋</h1>
        <p className="text-gray-600">This is your dashboard. Let’s build something powerful.</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Group Scraper</h2>
          <p className="text-gray-600 text-sm">Scrape Facebook groups using keywords and save posts to CSV.</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Marketplace Scraper</h2>
          <p className="text-gray-600 text-sm">Search Facebook Marketplace for land deals by keyword and ZIP.</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
          <p className="text-gray-600 text-sm">Custom auto-messaging, data filters, and more.</p>
        </div>
      </section>
    </main>
  );
}