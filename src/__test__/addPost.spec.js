import React, { useContext } from "react";
import { shallow } from "enzyme";
import { PostsContext } from "../providers/PostsProvider";
import AddPost from '../components/AddPost'

describe("test add post", () => {
    const usePostContextReturnValue = {
        posts: []
    }

    afterEach(() => {
        jest.clearAllMocks()
    })

    it("renders add post form",()=> {
        const wrapper  = shallow(<AddPost/>)
        expect(wrapper.find(".AddPost")).toHaveLength(1)
    })
});
