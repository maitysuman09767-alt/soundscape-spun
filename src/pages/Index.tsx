import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { AlbumCard } from "@/components/AlbumCard"
import { MusicPlayer } from "@/components/MusicPlayer"
import album1 from "@/assets/album-1.jpg"
import album2 from "@/assets/album-2.jpg"
import album3 from "@/assets/album-3.jpg"
import album4 from "@/assets/album-4.jpg"

const featuredAlbums = [
  { title: "Electronic Dreams", artist: "Neo Sounds", image: album1 },
  { title: "Neon Nights", artist: "Cyber Beats", image: album2 },
  { title: "Tropical Vibes", artist: "Island Records", image: album3 },
  { title: "Ocean Waves", artist: "Ambient Flow", image: album4 },
]

const recentlyPlayed = [
  { title: "Midnight Drive", artist: "Retro Wave", image: album2 },
  { title: "Summer Breeze", artist: "Chill Out", image: album3 },
  { title: "Digital Sky", artist: "Synthetics", image: album1 },
  { title: "Deep Blue", artist: "Ocean Sounds", image: album4 },
  { title: "Neon Dreams", artist: "Electric Pulse", image: album1 },
  { title: "Sunset Glow", artist: "Warm Tones", image: album3 },
]

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 overflow-auto pb-24">
          {/* Hero Section */}
          <section className="hero-gradient p-8 mb-8">
            <div className="max-w-screen-xl mx-auto">
              <h1 className="text-5xl font-bold text-foreground mb-4">
                Good evening
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Let's find something for you to listen to
              </p>
              
              {/* Quick Access Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {featuredAlbums.slice(0, 6).map((album, index) => (
                  <div 
                    key={index}
                    className="flex items-center bg-card/50 rounded-md hover:bg-card/70 transition-smooth cursor-pointer group"
                  >
                    <img 
                      src={album.image} 
                      alt={album.title}
                      className="w-16 h-16 object-cover rounded-l-md"
                    />
                    <span className="px-4 font-medium text-foreground flex-1 truncate">
                      {album.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="max-w-screen-xl mx-auto px-8">
            {/* Featured Albums Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Featured Albums</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {featuredAlbums.map((album, index) => (
                  <AlbumCard 
                    key={index}
                    title={album.title}
                    artist={album.artist}
                    image={album.image}
                  />
                ))}
              </div>
            </section>

            {/* Recently Played Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Recently Played</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {recentlyPlayed.map((album, index) => (
                  <AlbumCard 
                    key={index}
                    title={album.title}
                    artist={album.artist}
                    image={album.image}
                  />
                ))}
              </div>
            </section>

            {/* Made For You Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Made For You</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {[...featuredAlbums].reverse().map((album, index) => (
                  <AlbumCard 
                    key={index}
                    title={`Daily Mix ${index + 1}`}
                    artist="Mixed for you"
                    image={album.image}
                  />
                ))}
              </div>
            </section>
          </div>
        </main>

        <MusicPlayer />
      </div>
    </SidebarProvider>
  )
}

export default Index