import { Home, Search, Library, Plus, Heart } from "lucide-react"
import { NavLink } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const mainItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Search", url: "/search", icon: Search },
  { title: "Your Library", url: "/library", icon: Library },
]

const libraryItems = [
  { title: "Create Playlist", url: "/create", icon: Plus },
  { title: "Liked Songs", url: "/liked", icon: Heart },
]

const playlists = [
  "My Playlist #1",
  "Chill Vibes",
  "Workout Mix",
  "Road Trip Songs",
  "Study Focus",
  "Party Hits"
]

export function AppSidebar() {
  return (
    <Sidebar className="w-60">
      <SidebarContent className="bg-sidebar px-3 py-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-primary">Spotify</h1>
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="text-sidebar-foreground hover:text-primary transition-smooth">
                    <NavLink to={item.url} end>
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-8">
          <SidebarGroupContent>
            <SidebarMenu>
              {libraryItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="text-sidebar-foreground hover:text-primary transition-smooth">
                    <NavLink to={item.url}>
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-8">
          <div className="h-px bg-sidebar-border mb-4"></div>
          <SidebarGroup>
            <SidebarGroupLabel className="text-sidebar-foreground font-medium">Playlists</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {playlists.map((playlist) => (
                  <SidebarMenuItem key={playlist}>
                    <SidebarMenuButton asChild className="text-muted-foreground hover:text-sidebar-foreground transition-smooth">
                      <NavLink to={`/playlist/${playlist.toLowerCase().replace(/\s+/g, '-')}`}>
                        <span className="truncate">{playlist}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}