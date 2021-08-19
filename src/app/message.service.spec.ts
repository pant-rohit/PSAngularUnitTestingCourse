import { MessageService } from "./message.service"

describe('Message Service', () => {
    let service: MessageService

    it('should have no messages at initilization', () => {
        service = new MessageService();

        expect(service.messages.length).toEqual(0);
    })

    it('should add a message when add method is called', () => {
        service = new MessageService();
        service.add('test');

        expect(service.messages.length).toEqual(1);
    })

    it('should have no message when clear methos is called', () => {
        service = new MessageService();
        service.add('test');

        service.clear();

        expect(service.messages.length).toEqual(0);
    })
})