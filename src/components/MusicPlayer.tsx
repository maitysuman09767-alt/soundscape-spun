import { Play, Pause, SkipBack, SkipForward, Volume2, Shuffle, Repeat } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState([75])
  const [progress, setProgress] = useState([30])

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Currently Playing */}
        <div className="flex items-center space-x-4 flex-1 min-w-0">
          <div className="w-14 h-14 bg-muted rounded-md flex-shrink-0"></div>
          <div className="min-w-0">
            <div className="font-medium text-foreground truncate">Song Title</div>
            <div className="text-sm text-muted-foreground truncate">Artist Name</div>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center space-y-2 flex-1">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Shuffle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground h-10 w-10"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 fill-current" />}
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <SkipForward className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Repeat className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Progress Bar */}
          <div className="flex items-center space-x-2 w-full max-w-md">
            <span className="text-xs text-muted-foreground">1:23</span>
            <Slider
              value={progress}
              onValueChange={setProgress}
              max={100}
              step={1}
              className="flex-1"
            />
            <span className="text-xs text-muted-foreground">3:45</span>
          </div>
        </div>

        {/* Volume Controls */}
        <div className="flex items-center space-x-2 flex-1 justify-end">
          <Volume2 className="h-4 w-4 text-muted-foreground" />
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
            className="w-24"
          />
        </div>
      </div>
    </div>
  )
}