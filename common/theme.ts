
interface ThemeType{
  IconColor:string;
  TextColor:string;
  BackgroundColor:string
}
let themes:Record<string,ThemeType> = {
  'black': {
    IconColor: 'Lightblue',
    TextColor: 'rgba(250,250,250,1)',
    BackgroundColor:"rgba(0,0,0,0.85)"
  },
  'white': {
    IconColor: '#2f80ed',
    TextColor: '#434d58',
    BackgroundColor:"#fffefe"
  },
  "default":{
    IconColor: '#2f80ed',
    TextColor: '#434d58',
    BackgroundColor:"#fffefe"
  }
};
function getTheme(theme = 'light') {
  if (theme in themes) {
    return themes[theme] as ThemeType;
  } else {
    return themes['light'] as ThemeType;
  }
}

export {
  getTheme
}
