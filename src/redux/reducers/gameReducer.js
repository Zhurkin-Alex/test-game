import { GAME, OPENCELL, REMOVED,CLOSE } from "../actionTypes/actionTypes";

const game = {
  oneGame: [
    [
      {
        color: "red",
        color2:"grey",
        status: "closed",
        id:'1',
      },
      {
        color: "blue",
        color2:"grey",
        status: "closed",
        id:'2',
      },
      {
        color: "black",
        color2:"grey",
        status: "closed",
        id:'3',
      },
      {
        color: "red",
        color2:"grey",
        status: "closed",
        id:'4',
      },
    ],
    [
      {
        color: "blue",
        color2:"grey",
        status: "closed",

        id:'5',
      },
      {
        color: "red",
        color2:"grey",
        status: "closed",
        id:'6',
      },
      {
        color: "red",
        color2:"grey",
        status: "closed",
        id:'7',
      },
      {
        color: "black",
        color2:"grey",
        status: "closed",
        id:'8',
      },
    ],
    [
      {
        color: "orange",
        color2:"grey",
        status: "closed",
        id:'9',
      },
      {
        color: "orange",
        color2:"grey",
        status: "closed",
        id:'10',
      },
      {
        color: "red",
        color2:"grey",
        status: "closed",
        id:'11',
      },
      {
        color2:"grey",
        color: "red",
        status: "closed",
        id:'12',
      },
    ],
    [
      {
        color: "green",
        color2:"grey",
        status: "closed",
        id:'13',
      },
      {
        color: "red",
        color2:"grey",
        status: "closed",
        id:'14',
      },
      {
        color: "red",
        color2:"grey",
        status: "closed",
        id:'15',
      },
      {
        color: "green",
        color2:"grey",
        status: "closed",
        id:'16',
      },
    ],
  ],
  User:
    {count:0}
  
};
export default function userReducer(state = game, action) {
  switch (action.type) {

    case GAME:
      // console.log(action.payload);
      return {...state,
      User:{
        ...state.User,
        count: action.payload
      }
    }
    case OPENCELL:
      return{
        ...state,
        User:
        {...state.User,
        count:state.User.count+1},
        oneGame: state.oneGame.map(row=> row.map(cell=>cell.id===action.payload ? {...cell, status:"open"} : cell))
      }
    case REMOVED:
      return{
        ...state,
        oneGame: state.oneGame.map(row=> row.map(cell=>action.payload.includes(cell.id) ? {...cell, status:"hidden"} : cell))
      }
    case CLOSE:
    return{
      ...state,
      oneGame: state.oneGame.map(row=> row.map(cell=>action.payload.includes(cell.id) ? {...cell, status:"closed"} : cell))
    }

    default:
      return state;
  }
}
