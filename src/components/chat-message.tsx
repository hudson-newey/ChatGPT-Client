import { ChatMessageModel, IChatMessage } from "@/models/chat-message";
import { faRobot, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ChatMessage(props: IChatMessage) {
  const message: ChatMessageModel = new ChatMessageModel(
    props.role,
    props.text
  );

  if (message.role) {
    return (
      <div className="bg-gray-700 border border-gray-500 rounded p-4 m-4">
        <span className="text-gray-50 font-bold flex items-center">
          <FontAwesomeIcon icon={props.role === 'User' ? faUser : faRobot} className="text-gray-50 w-4 mr-2" />
          {message.role}
        </span>
        
        <div className="mt-2 text-gray-50">{message.text}</div>
      </div>
    );
  }
}
