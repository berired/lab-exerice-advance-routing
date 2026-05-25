export default function TasksLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      {children}
      {/* @modal slot renders the intercepted task modal on soft navigation */}
      {modal}
    </>
  );
}
