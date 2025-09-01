import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface AlbumCardProps {
  title: string
  artist: string
  image: string
  className?: string
}

export function AlbumCard({ title, artist, image, className }: AlbumCardProps) {
  return (
    <Card className={`group relative bg-card hover:bg-card/80 transition-smooth cursor-pointer ${className || ''}`}>
      <CardContent className="p-4">
        <div className="relative mb-4">
          <img 
            src={image} 
            alt={`${title} by ${artist}`}
            className="w-full aspect-square object-cover rounded-md shadow-lg"
          />
          <Button
            size="icon"
            className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg animate-glow"
          >
            <Play className="h-5 w-5 fill-current" />
          </Button>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-1 truncate">{title}</h3>
          <p className="text-sm text-muted-foreground truncate">{artist}</p>
        </div>
      </CardContent>
    </Card>
  )
}