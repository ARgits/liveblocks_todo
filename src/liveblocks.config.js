import {createClient} from "@liveblocks/client"
import {createRoomContext} from "@liveblocks/react";

const client = createClient({
    publicApiKey: "pk_test_oOGQi75ifSWwiepK_J2IGg5R",
})
export const {
    suspense: {
        RoomProvider,
        useOthers,
        useUpdateMyPresence,
        useStorage,
        useMutation
    },
} = createRoomContext(client)