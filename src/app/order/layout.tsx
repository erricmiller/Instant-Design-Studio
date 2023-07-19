
export const metadata = {
  title: 'Order | Instant Design Studio',
  description: 'Instant Design is a full-service digital solutions agency specializing in branding designs, Software, Mobile Apps, Webs, & Marketing Solutions.',
};

const OrderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
      <div className={`mx-auto `}>
        <div className="div_container py-[50px]">{children}</div>
      </div>
  );
};

export default OrderLayout;
