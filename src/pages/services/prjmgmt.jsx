import { Helmet } from "react-helmet";
import ServiceComp from "../../Components/service/services";
import service3 from "../../assets/images/service/service3.jpg";

const ProjectMgmt = () => {
    return (
        <>
            <Helmet>
                <title>Project Management - CGD Consulting - Engineering Excellence</title>
            </Helmet>
            <ServiceComp
                serviceName={"Project Management"}
                description={"At CGD Consulting, we offer top-notch project management services, providing our clients with the expertise and support they need to drive their projects to success. Our team of skilled project managers works closely with clients to develop project plans, manage budgets and schedules, and oversee all aspects of project execution, from procurement to construction management. We leverage our years of experience in project management to help clients navigate complex projects and overcome challenges, ensuring that their projects are delivered on time, within budget, and to the highest quality standards. Our transparent and collaborative approach to project management, coupled with our use of cutting-edge technology and best practices, enables us to deliver superior results that exceed expectations. We are committed to delivering value to our clients through our project management services, helping them achieve their goals with confidence and peace of mind."}
                url={service3}
            />
        </>
    );
}

export default ProjectMgmt;