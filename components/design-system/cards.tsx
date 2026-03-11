"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Leaf, Drop, Feather, ArrowRight } from "@phosphor-icons/react"

export function CardsSection() {
  return (
    <section id="cards">
      <div className="mb-12">
        <h2 className="mb-3 font-serif text-2xl font-light tracking-wide text-foreground md:text-3xl">
          Cards
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          情報を包み込む器。カードは招待状の封筒のように、大切なものを丁寧に届ける。
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Basic Card */}
        <Card>
          <CardHeader>
            <div className="mb-2">
              <Leaf weight="thin" size={32} className="text-primary/50" />
            </div>
            <CardTitle className="font-serif font-light tracking-wide">
              Basic Card
            </CardTitle>
            <CardDescription>
              シンプルな情報表示
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-muted-foreground">
              余白を大切にしたカードコンポーネント。情報を詰め込まず、呼吸のある構成を。
            </p>
          </CardContent>
        </Card>

        {/* Card with Badge */}
        <Card>
          <CardHeader>
            <div className="mb-2">
              <Drop weight="thin" size={32} className="text-primary/50" />
            </div>
            <CardTitle className="font-serif font-light tracking-wide">
              Featured
            </CardTitle>
            <CardDescription className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">New</Badge>
              Latest update
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-muted-foreground">
              バッジとの組み合わせ。控えめなアクセントが、重要な情報を自然に際立たせる。
            </p>
          </CardContent>
        </Card>

        {/* Card with Action */}
        <Card>
          <CardHeader>
            <div className="mb-2">
              <Feather weight="thin" size={32} className="text-primary/50" />
            </div>
            <CardTitle className="font-serif font-light tracking-wide">
              Actionable
            </CardTitle>
            <CardDescription>
              Actions available
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-muted-foreground">
              アクションを伴うカード。CTAは控えめながらも、確かに存在する。
            </p>
          </CardContent>
          <CardFooter className="gap-3">
            <Button size="sm" className="tracking-wider">
              View
              <ArrowRight weight="light" size={16} />
            </Button>
            <Button size="sm" variant="outline" className="tracking-wider">Dismiss</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Wide card example */}
      <div className="mt-8">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-[1fr_1.5fr]">
            <div
              className="h-48 md:h-auto"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.1 45 / 0.15), oklch(0.65 0.09 65 / 0.1))",
              }}
            />
            <div className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-serif text-xl font-light tracking-wide">
                  Horizontal Layout
                </CardTitle>
                <CardDescription>
                  Wide card with media area
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  横長のカードレイアウト。画像やメディアエリアとテキストを非対称に配置し、
                  自然光が片側から差し込むような重心のある構図を実現する。
                </p>
              </CardContent>
              <CardFooter className="gap-3">
                <Button size="sm" variant="outline" className="tracking-wider">
                  Read More
                  <ArrowRight weight="light" size={16} />
                </Button>
              </CardFooter>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
