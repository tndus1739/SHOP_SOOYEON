function AdminCategorys({categorys}) {

  return (
    <>
      {
        categorys.map((it, index) => (
          <option value={it.id} key={index}>{it.name}</option>
        ))
      }
    </>
  );
}

export default AdminCategorys;
