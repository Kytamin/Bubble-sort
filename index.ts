// từ nhỏ đến lớn
export class BubbleSort {
    static list: number[] = [2, 3, 2, 5, 6, 1, -2, 3, 14, 12];

    public static bubbleSort(list: number[]): void {
        for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < list.length-1-i; j++) {
                if(list[j]>list[j+1]){
                    let temp = list[j]
                    list[j]=list[j+1]
                    list[j+1]=temp
                }
            }
        }

    }
    // từ lớn đến  nhỏ
    public static bubbleSort2(list: number[]): void {
        for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < list.length-1-i; j++) {
                if(list[j]<list[j+1]){
                    let temp = list[j]
                    list[j]=list[j+1]
                    list[j+1]=temp
                }
            }
        }

    }
}


BubbleSort.bubbleSort(BubbleSort.list)
console.log(BubbleSort.list)
BubbleSort.bubbleSort2(BubbleSort.list)
console.log(BubbleSort.list)