export const metadata = {
  title: "Dashboard",
};

export default function Dashboard() {
  return (
    <>
      <div className="pt-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50"></div>
        <div className="aspect-video rounded-xl bg-muted/50"></div>
        <div className="aspect-video rounded-xl bg-muted/50"></div>
      </div>

      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min"></div>

      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50"></div>
        <div className="aspect-video rounded-xl bg-muted/50"></div>
        <div className="aspect-video rounded-xl bg-muted/50"></div>
      </div>

      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min"></div>

      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50"></div>
        <div className="aspect-video rounded-xl bg-muted/50"></div>
        <div className="aspect-video rounded-xl bg-muted/50"></div>
      </div>
    </>
  );
}
