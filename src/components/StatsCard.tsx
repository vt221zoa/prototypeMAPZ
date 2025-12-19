type StatsCardProps = {
    title: string
    value: string | number
    description?: string
}

export default function StatsCard({
                                      title,
                                      value,
                                      description,
                                  }: StatsCardProps) {
    return (
        <div className="bg-white rounded-lg border p-5 shadow-sm">
            <h3 className="text-sm text-gray-500">{title}</h3>
            <div className="text-3xl font-bold mt-2">{value}</div>
            {description && (
                <p className="text-sm text-gray-400 mt-1">{description}</p>
            )}
        </div>
    )
}
