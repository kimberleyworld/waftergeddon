interface InfoSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function InfoSection({ title, children }: InfoSectionProps) {     
  return (        
    <div className="mb-8 p-4 bg-background text-foreground">
      <h2 className="text-3xl font-bold mb-4 font-cloister flex items-center">
        <span className="text-gothRed mr-2">⟡</span>
        {title}
      </h2>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  ); 
}