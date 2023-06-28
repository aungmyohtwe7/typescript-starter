
import Id from "./primarykey";
export default interface WhiteListIp extends Id{
    created_date: String;
    whitelist_ip: String;
    api_key: String;

}