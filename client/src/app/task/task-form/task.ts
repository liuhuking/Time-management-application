export class Task {
    constructor(
        public _id: string,
        public name: string,
        public date: string,
        public goal: string,
        public deliverable: string,
        public priority: number,
        public startTime: string,
        public endTime: string,
        public reminder: string,
        public process: string[]
    ) { }
}