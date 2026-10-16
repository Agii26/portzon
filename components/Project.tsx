export type ProjectData = {
  slug: string; title: string; meta: string[]; summary: string;
  build: string; verify: string; verifyTodo: string; tags: string[];
};

export default function Project({ p }: { p: ProjectData }) {
  return (
    <article className="proj" id={p.slug}>
      <div className="meta">{p.meta.map((m) => <div key={m}>{m}</div>)}</div>
      <div>
        <h3>{p.title}</h3>
        <p>{p.summary}</p>
        <div className="panel show-build">{p.build}</div>
        <div className="panel show-verify">
          {p.verify}
          {p.verifyTodo && <div><span className="todo">{p.verifyTodo}</span></div>}
        </div>
        <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
      </div>
    </article>
  );
}
