interface InfoSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function InfoSection({ title, children }: InfoSectionProps) {     
  return (        
    <div className="mb-20 mt-18 bg-background text-foreground">
      <h2 className="text-3xl font-bold mb-8 font-cloister flex items-center text-center justify-center">
        <span className="mr-2 text-gothic-red">⟡</span>
        {title}
        <span className="ml-2 text-gothic-red">⟡</span>
      </h2>
      <div className="">
        {children}
      </div>
    </div>
  ); 
}