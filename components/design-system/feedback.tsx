"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

export function FeedbackSection() {
  const { toast } = useToast()
  const [progress, setProgress] = useState(60)

  return (
    <section id="feedback">
      <div className="mb-12">
        <h2 className="mb-3 font-serif text-2xl font-light tracking-wide text-foreground md:text-3xl">
          Feedback & Overlay
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          即座に現れず、すっと現れる。0.2~0.4秒の穏やかなイージングで、空間に自然に馴染む。
        </p>
      </div>

      <div className="flex flex-col gap-16">
        {/* Badge */}
        <div>
          <h3 className="mb-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Badge
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </div>

        {/* Progress */}
        <div>
          <h3 className="mb-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Progress
          </h3>
          <div className="flex flex-col gap-6 max-w-md">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Progress</span>
                <span className="text-xs text-muted-foreground font-mono">{progress}%</span>
              </div>
              <Progress value={progress} />
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setProgress(Math.max(0, progress - 20))}
              >
                -20
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setProgress(Math.min(100, progress + 20))}
              >
                +20
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div>
          <h3 className="mb-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Tabs
          </h3>
          <Tabs defaultValue="design" className="max-w-md">
            <TabsList>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
            <TabsContent value="design" className="mt-4">
              <div className="rounded-sm border border-border/50 bg-card p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  招待状を原風景にした、温もりのあるデザイン言語。余白と呼吸を大切にする。
                </p>
              </div>
            </TabsContent>
            <TabsContent value="code" className="mt-4">
              <div className="rounded-sm border border-border/50 bg-card p-6">
                <code className="text-sm text-muted-foreground font-mono">
                  {'<Button variant="default">Submit</Button>'}
                </code>
              </div>
            </TabsContent>
            <TabsContent value="preview" className="mt-4">
              <div className="rounded-sm border border-border/50 bg-card p-6">
                <Button size="sm">Submit</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Toast */}
        <div>
          <h3 className="mb-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Toast
          </h3>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              onClick={() => {
                toast({
                  title: "Saved",
                  description: "Your changes have been saved successfully.",
                })
              }}
            >
              Show Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                toast({
                  variant: "destructive",
                  title: "Error",
                  description: "Something went wrong. Please try again.",
                })
              }}
            >
              Show Error Toast
            </Button>
          </div>
        </div>

        {/* Dialog */}
        <div>
          <h3 className="mb-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Dialog
          </h3>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="font-serif font-light tracking-wide">
                  Confirm Action
                </DialogTitle>
                <DialogDescription>
                  この操作は取り消せません。本当に続行しますか？
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Continue</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Toaster />
    </section>
  )
}
