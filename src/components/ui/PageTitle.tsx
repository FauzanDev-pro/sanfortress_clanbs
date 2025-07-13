interface PageTitleProps {
  title: string
  subtitle: string
}

export default function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
        {title}
      </h1>
      <p className="text-xl text-gray-600">{subtitle}</p>
    </div>
  )
}