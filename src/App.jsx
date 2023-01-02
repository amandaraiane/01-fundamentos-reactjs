import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import './global.css'

import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/amandaraiane.png',
      name: 'Amanda Raiane',
      role: 'Web Developer'

    },
    content: [
      {type: 'paragraph', content: 'Fala galera!'},
      {type: 'paragraph', content: 'Olá pessoal, estou estudando na Rocketseat e Alura atualmente.'},
      {type: 'link', content: 'amanda.design/projeto'}
    ],
    publishedAt: new Date('2022-05-03 20:15:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego',
      role: 'Web Developer'

    },
    content: [
      {type: 'paragraph', content: 'Fala galera!'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto.'},
      {type: 'link', content: 'diego.design/projeto'}
    ],
    publishedAt: new Date('2022-05-10 20:15:00')
  }
]

export function App() {

  return (
    <>
      <Header/>

      <div className={styles.wrapper}>

        <Sidebar/>
        
        <main>
          {posts.map(post => {
            return (
              <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

