import { subtitle, title } from '@/components/primitives'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4  py-8 md:py-10">
      <div className="inline-block max-w-lg justify-center text-center">
        <h1 className={title()}>Next&nbsp;</h1>
        <h1 className={title({ color: 'violet' })}>UI&nbsp;</h1>
        <h1 className={subtitle()}>テンプレート&nbsp;</h1>
      </div>
    </section>
  )
}
