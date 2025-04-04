export default function ChildrenProp(props) {

    const { name, children } = props;
    console.log(children);

    return (
        <div>
            <h1>Hello my name is {name}</h1>
            {children}
        </div>
    );
};
