export default async function Page({ params }) {
  const { slug } = await params; 
  let languages = ["python", "java", "javascript", "c"]
  if(languages.includes(slug)){
    return <div>My Post: {slug}</div>;
  }
  else{
    return <div>post not found </div>
  }
  
  
}
